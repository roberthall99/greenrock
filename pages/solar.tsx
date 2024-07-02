import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import ContactForm from "@/components/ContactForm/ContactForm";
import {Text, Title} from "@mantine/core";

export default function ContactPage() {
    return (
        <>
            <HeaderMenu />
            <Title ta={'center'} order={1}>Solar PV</Title>
            <Title ta={'center'} order={3} m={'lg'}>Electricity from the sun!</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Solar panels offer an excellent way to reduce your electricity and heating costs by harnessing the energy from sunlight that hits your roof daily, converting it into power for your appliances, hot water, and other electrical devices in your home.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                GreenRock Solar is dedicated to utilizing top-quality materials to guarantee our customers achieve optimal performance from their systems over their entire lifespan.
            </Text>
            <Title ta={'center'} order={3} m={'lg'}>Get in touch!</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                To find out how much you could save on your bills, contact us below for a free quote and savings estimate!
            </Text>
        </>
    );
}
