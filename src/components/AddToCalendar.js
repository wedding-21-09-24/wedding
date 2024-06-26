import {Box, Button, Divider, List, ListItem, ListItemButton, ListItemDecorator, Modal, Sheet} from "@mui/joy";
import * as React from 'react';
import {Apple, Google} from "@mui/icons-material";

const addToGoogleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240921T163000/20240921T230000&ctz=Europe/Moscow&location=LOFT%20HALL%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%202-%D0%B9%20%D0%9A%D0%BE%D0%B6%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%2C%2029%D0%BA6&text=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%8B%20%D0%B8%20%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0&details=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%8B%20%D0%B8%20%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0.%20LOFT%20HALL%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%202-%D0%B9%20%D0%9A%D0%BE%D0%B6%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%2C%2029%D0%BA6";
const addToAppleCalendarUrl = "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    "URL:https://wedding-21-09-24.github.io/ep/\n" +
    "METHOD:PUBLISH\n" +
    "DTSTART:20240921T163000\n" +
    "DTEND:20240921T230000\n" +
    "SUMMARY:Свадьба Екатерины и Павла\n" +
    "DESCRIPTION:Свадьба Екатерины и Павла. LOFT HALL, Москва, 2-й Кожуховский проезд, 29к6\n" +
    "LOCATION:LOFT HALL, Москва, 2-й Кожуховский проезд, 29к6\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";


function AddToCalendar() {
    const [open, setOpen] = React.useState(false);

    const handleListItemClick = (value) => {
        const link = document.createElement("a");
        if (value === 'Apple') {
            const file = new Blob([addToAppleCalendarUrl], {type: "text/calendar;charset=utf-8"});
            link.href = URL.createObjectURL(file);
            link.download = "event-to-save-in-my-calendar.ics";
        } else {
            link.href = addToGoogleCalendarUrl;
            link.target = "_blank";
        }
        link.click();
        setOpen(false);
    };

    return (
        <Box>
            <Button onClick={() => setOpen(true)}
                    size="lg" color="neutral"
                    sx={{
                        width: '100%',
                        backgroundColor: 'black',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}>
                Добавить в календарь
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        boxShadow: 'lg',
                        p: 1
                    }}
                >
                    <List size="lg" sx={{p: 0}}>
                        <ListItem sx={{p:1}}>
                            <ListItemButton
                                onClick={() => handleListItemClick("Apple")}>
                                <ListItemDecorator>
                                    <Apple/>
                                </ListItemDecorator>
                                Apple календарь
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                        <ListItem sx={{p:1}}>
                            <ListItemButton
                                onClick={() => handleListItemClick("Google")}>
                                <ListItemDecorator>
                                    <Google/>
                                </ListItemDecorator>
                                Google календарь
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Sheet>
            </Modal>
        </Box>
    );
}

export default AddToCalendar;
