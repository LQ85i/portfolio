"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

type MyComponentProps = React.PropsWithChildren<{}>;

export function Providers({ children }: MyComponentProps ){ 

  return (
      <GoogleReCaptchaProvider reCaptchaKey="6Lf-jAooAAAAAGbBijZAYIR6xA40AfW27Vk4vR6l">
        {children}
      </GoogleReCaptchaProvider>
  )
}