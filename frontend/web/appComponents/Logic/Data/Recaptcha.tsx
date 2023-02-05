import ReCAPTCHA from 'react-google-recaptcha';

export default function Recaptcha() {

    return (
        <ReCAPTCHA
        sitekey="6LeTjE8kAAAAAL9zV6bde2RryjppK27eSvf10nUf"
        onChange={(e) => console.log("Captcha value:", e.value)}
        />
    )
}