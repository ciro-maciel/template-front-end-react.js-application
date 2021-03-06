export const mutations = {
  SET_TOKEN_REQUEST: `
    mutation($email: String!) {
      tokenRequest(email: $email)
    }
  `,
  SET_TOKEN_VALIDATE: `
    mutation($validate: ValidadeInput!) {
      tokenValidate(validate: $validate) {
        code
        account {
          id
          email
        }
        value
      }
    }
  `,
};

export const queries = {};
