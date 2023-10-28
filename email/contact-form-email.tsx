
import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';

// import { Tailwind } from '@react-email/tailwind'


type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

// export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
//   return (
//     <Html>
//         <Head/>
//         <Preview>New message from your portfolio site</Preview>
//         <Tailwind> 
//             <Body>
//                 <Container>
//                     <Section>
//                         <Heading>You received the following message from the contact form</Heading>
//                         <Text>{message}</Text>
//                         <Hr/>
//                         <Text>The sender's email is: {senderEmail}</Text>
//                     </Section>
//                 </Container>
//             </Body>
//         </Tailwind>
//     </Html>
//   )
// }


export default function ContactFormEmail({
    message,
    senderEmail,
  }: ContactFormEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Body style={{ backgroundColor: '#F7FAFC', color: '#1A202C' }}>
          <Container>
            <Section style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #2D3748',
              margin: '40px 0',
              padding: '40px',
              borderRadius: '8px'
            }}>
              <Heading style={{ lineHeight: '1.5', marginBottom: '20px' }}>
                You received the following message from the contact form
              </Heading>
              <Text style={{ marginBottom: '20px' }}>{message}</Text>
              <Hr style={{ border: '1px solid #E2E8F0', margin: '20px 0' }}/>
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
}
