import * as Yup from "yup";

export let sendMessage  = Yup.object().shape({
    name : Yup.string()
    .min(3 , "Name must have 3 characters")
    .max(12)
    .required(),


    email : Yup.string()
    .email()
    .required(),


    message : Yup.string()
    .min(3 , "message must have 3 characters")
    .max(210)
    .required()
});
