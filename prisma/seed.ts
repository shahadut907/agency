import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // Create Admin User
    const password = await bcrypt.hash('admin123', 10)

    // Check if admin exists
    const existingAdmin = await prisma.user.findUnique({
        where: { email: 'admin@agency.com' }
    })

    if (!existingAdmin) {
        const admin = await prisma.user.create({
            data: {
                email: 'admin@agency.com',
                name: 'Admin User',
                password,
                role: 'ADMIN',
            },
        })
        console.log('Admin user created:', admin.email)
    } else {
        console.log('Admin user already exists:', existingAdmin.email)
    }

    // Create Sample Services
    const serviceData = [
        {
            title: 'AI Agent Development',
            description: 'Custom autonomous AI agents, multi-agent systems, and RAG implementations tailored to your business needs.',
            icon: 'Bot',
            link: '#',
            order: 1,
        },
        {
            title: 'Business Process Automation',
            description: 'Streamline workflows, automate data processing pipelines, and seamlessly integrate with existing systems.',
            icon: 'Workflow',
            link: '#',
            order: 2,
        },
        {
            title: 'AI API Integration',
            description: 'Expert integration with OpenAI, Anthropic, and Google AI. Custom API development with real-time processing.',
            icon: 'Code',
            link: '#',
            order: 3,
        },
        {
            title: 'Custom AI Solutions',
            description: 'Intelligent chatbots, document analysis systems, predictive analytics, and bespoke AI-powered applications.',
            icon: 'Sparkles',
            link: '#',
            order: 4,
        },
    ]

    for (const service of serviceData) {
        const existing = await prisma.service.findFirst({
            where: { title: service.title }
        })

        if (!existing) {
            await prisma.service.create({ data: service })
            console.log('Created service:', service.title)
        }
    }

    // Create Sample Pricing Plans
    const pricingData = [
        {
            name: 'Starter',
            priceMonthly: 99,
            priceYearly: 950,
            description: 'Perfect for small teams getting started with AI automation',
            popular: false,
            order: 1,
            features: [
                '5 AI agents',
                'Basic AI automation',
                '10,000 API calls/month',
                'Email support',
                'Community access',
                'Basic analytics',
            ],
        },
        {
            name: 'Professional',
            priceMonthly: 299,
            priceYearly: 2990,
            description: 'Advanced automation for growing businesses',
            popular: true,
            order: 2,
            features: [
                'Unlimited AI agents',
                'Advanced automation workflows',
                '100,000 API calls/month',
                'Priority support (24/7)',
                'Custom integrations',
                'Advanced analytics',
                'Multi-agent systems',
                'Dedicated account manager',
            ],
        },
        {
            name: 'Enterprise',
            priceMonthly: null,
            priceYearly: null,
            description: 'Custom solutions for large organizations',
            popular: false,
            order: 3,
            features: [
                'Unlimited everything',
                'Dedicated infrastructure',
                'SLA guarantee (99.99%)',
                '24/7 premium support',
                'Custom AI development',
                'White-label options',
                'On-premise deployment',
                'Security audit & compliance',
            ],
        },
    ]

    for (const plan of pricingData) {
        const existing = await prisma.pricingPlan.findFirst({
            where: { name: plan.name }
        })

        if (!existing) {
            const { features, ...planData } = plan
            await prisma.pricingPlan.create({
                data: {
                    ...planData,
                    features: {
                        create: features.map(text => ({ text })),
                    },
                },
            })
            console.log('Created pricing plan:', plan.name)
        }
    }

    console.log('✅ Seed completed successfully!')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error('❌ Seed failed:', e)
        await prisma.$disconnect()
        process.exit(1)
    })
