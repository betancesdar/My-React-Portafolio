import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const MailChimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}}`
   return (
    <>
        <MailchimpSubscribe
            url={postUrl}
            render={({subcribe, status,message}) => (
                <></>
            )}
        />      
    </>
  )
}

export default MailChimpForm
