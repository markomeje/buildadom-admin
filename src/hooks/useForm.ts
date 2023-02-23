import { ChangeEvent, useState } from "react";
import axios from 'axios';

type useFormProps = {
   form: any,
   additionalData: Object,
   endpointUrl: string
}

export default function useForm({form, endpointUrl, additionalData}: useFormProps) {
   const [status, setStatus] = useState("");

   const [submitting, setSubmitting] = useState(false);
   const [errors, setErrors] = useState<any>({});
   const [success, setSuccess] = useState({});
   const [message, setMessage] = useState('');

   const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
      if (form) {
         event.preventDefault();
         setSubmitting(true);
         setMessage('');

         const finalFormEndpoint = endpointUrl || form.action;
         const names = [...form.elements].filter((input) => (input.name));
         
         const data = names.reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

         if (additionalData) {
            Object.assign(data, additionalData);
         }

         const options = {
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         };

         axios.post(finalFormEndpoint, form, options).then((response) => {
            const data = response?.data;
            if (data['errors']) {
               setErrors(data['errors']);
            }else {
               setSuccess(data['success']);
               setMessage(data['message']);
            }

            setSubmitting(false);
         }).catch(function (error) {
            setSubmitting(false);
            setMessage('An error occurred. Try again later');
         });
      }
   };

   return { 
      success, 
      handleSubmit,
      message, 
      submitting, 
      errors,
   };
}