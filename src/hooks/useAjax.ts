import { FormEvent, useState } from "react";
import axios from 'axios';

type useFormProps = {
  endpointUrl: string,
  additionalData?: object
};

export default function useAjax(endpointUrl: string, additionalData: object) {
  const [submitting, setSubmitting] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');

  const handleAjax = () => {
    setSubmitting(true);
    setSuccessful(false);
    setMessage('');

    var config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: false
    };

    if (additionalData) {
      Object.assign(config, additionalData);
    }

    axios.post(endpointUrl, config).then((response) => {
      const data = response?.data;
      if (data['status'] === 0) {
        setMessage(data['message']);
      }else {
        setSuccessful(data['success']);
        setMessage(data['message']);
      }

      setSubmitting(false);
    }).catch(function () {
      setSubmitting(false);
      setSuccessful(false);
      setMessage('Unknown server error. Please try again.');
    });
  };

  return { 
    successful, 
    handleAjax,
    message, 
    submitting,
  };
}