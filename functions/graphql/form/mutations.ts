export const mutations = `#graphql
    createForm(data: CreateFormData!): String
    updateForm(data: UpdateFormInput!): Boolean
    submitFormResponse(data: SubmitFormResponseData!): String
    deleteFormsByIds(data: DeleteFormsInput!): Boolean
    `
