import {} from '@prisma/client'
import { faker } from '@faker-js/faker'

export function fakeBrand() {
    return {
        email: faker.internet.email(),
        name: faker.name.fullName(),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeBrandComplete() {
    return {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        name: faker.name.fullName(),
        whitelist: false,
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeCategory() {
    return {
        categoryName: faker.lorem.words(5),
        categoryImgUrl: faker.lorem.words(5),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeCategoryComplete() {
    return {
        id: faker.datatype.uuid(),
        categoryName: faker.lorem.words(5),
        categoryImgUrl: faker.lorem.words(5),
        status: true,
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeSubCategory() {
    return {
        subCategoryName: faker.lorem.words(5),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeSubCategoryComplete(categoryId: string) {
    return {
        id: faker.datatype.uuid(),
        subCategoryName: faker.lorem.words(5),
        categoryId: categoryId,
        status: true,
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeProductList() {
    return {
        productName: faker.lorem.words(5),
        productDesc: faker.lorem.words(5),
        unit: faker.datatype.number(),
        expiryDate: faker.lorem.words(5),
        materialUsed: faker.lorem.words(5),
        location: faker.lorem.words(5),
        ManufacturingDeatils: faker.lorem.words(5),
        SKU: faker.lorem.words(5),
        SpecialFeatures: faker.lorem.words(5),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeProductListComplete(attributeId: string) {
    return {
        id: faker.datatype.uuid(),
        productName: faker.lorem.words(5),
        status: true,
        productDesc: faker.lorem.words(5),
        unit: faker.datatype.number(),
        expiryDate: faker.lorem.words(5),
        materialUsed: faker.lorem.words(5),
        location: faker.lorem.words(5),
        ManufacturingDeatils: faker.lorem.words(5),
        attributeId: attributeId,
        SKU: faker.lorem.words(5),
        SpecialFeatures: faker.lorem.words(5),
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeCERT() {
    return {
        certName: faker.lorem.words(5),
        issuedBy: faker.lorem.words(5),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeCERTComplete(productListId) {
    return {
        id: faker.datatype.uuid(),
        certName: faker.lorem.words(5),
        issuedBy: faker.lorem.words(5),
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
        productListId: productListId,
    }
}
export function fakeProductAttribute() {
    return {
        attributeName: faker.lorem.words(5),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeProductAttributeComplete(attributeCategoryId: string) {
    return {
        id: faker.datatype.uuid(),
        attributeName: faker.lorem.words(5),
        status: true,
        attributeCategoryId: attributeCategoryId,
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeProductSKU() {
    return {
        productsku: faker.lorem.words(5),
        updatedAt: faker.datatype.datetime(),
    }
}
export function fakeProductSKUComplete() {
    return {
        id: faker.datatype.uuid(),
        productsku: faker.lorem.words(5),
        status: true,
        SKUCategoryId: faker.datatype.uuid(),
        createdAt: new Date(),
        updatedAt: faker.datatype.datetime(),
    }
}
