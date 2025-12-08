import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import KontiLogo from "../../../../public/konti_logo.png";

type EmailProps = {
  url: string;
};

export function DeleteAccountEmail({ url }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Solicitud de eliminación de cuenta de Konti</Preview>
      <Tailwind>
        <Body className="bg-background m-auto font-sans">
          <Container className="mb-10 mx-auto p-5 max-w-[465px]">
            <Section className="mt-10">
              <Img
                src={KontiLogo.src}
                width="60"
                height="60"
                alt="Logo Konti"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-2xl text-foreground font-normal text-center p-0 my-8 mx-0">
              Eliminar cuenta de Konti
            </Heading>
            <Text className="text-start text-sm text-foreground">Hola,</Text>
            <Text className="text-start text-sm text-foreground leading-relaxed">
              Hemos recibido una solicitud para eliminar tu cuenta de Konti.
              Para confirmar la eliminación, haz clic en el botón a
              continuación.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="py-2.5 px-5 bg-white rounded-md text-black text-sm font-semibold no-underline text-center"
                href={url}
              >
                Confirmar eliminación
              </Button>
            </Section>
            <Text className="text-start text-sm text-foreground">
              Atentamente,
              <br />
              El equipo de Konti
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default DeleteAccountEmail;
