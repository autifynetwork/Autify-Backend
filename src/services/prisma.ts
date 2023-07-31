import { PrismaClient } from '@prisma/client'
import {
    fakeBrand,
    fakeCategory,
    fakeSubCategoryComplete,
    fakeProductListComplete,
    fakeProductAttributeComplete,
    fakeCERTComplete,
} from '../../types/fake-data'

const prisma = new PrismaClient()

async function name() {
    for (let i = 0; i < 10; i++) {
        await prisma.brand.create({
            data: {
                ...fakeBrand(),
            },
        })
    }
    console.log('Created Brands 🚀')

    const categoryPromises = Array.from({ length: 10 }, () =>
        prisma.category.create({
            data: {
                ...fakeCategory(),
            },
        })
    )

    const categories = await Promise.all(categoryPromises)
    console.log('Created Categories 🚀')

    const subCategoryPromises = categories.map((category) =>
        prisma.subCategory.create({
            data: {
                ...fakeSubCategoryComplete(category.id), // Pass categoryId from the created category
            },
        })
    )

    await Promise.all(subCategoryPromises)
    console.log('Created Sub Categories 🚀')

    const productAttributePromises = categories.map((category) =>
        prisma.productAttribute.create({
            data: {
                ...fakeProductAttributeComplete(category.id),
            },
        })
    )

    const productAttribute = await Promise.all(productAttributePromises)
    console.log('Created Product Attributes 🚀')

    const product = productAttribute.map((attribute) =>
        prisma.productList.create({
            data: {
                ...fakeProductListComplete(attribute.id),
            },
        })
    )

    const productList = await Promise.all(product)
    console.log('Created Products 🚀')

    const certPromises = productList.map((productId) =>
        prisma.cERT.create({
            data: {
                ...fakeCERTComplete(productId.id),
            },
        })
    )

    await Promise.all(certPromises)
    console.log('Created CERT 🚀')
}

name()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

export default prisma
