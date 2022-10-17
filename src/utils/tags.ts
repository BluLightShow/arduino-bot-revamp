import { MessageEmbed } from 'discord.js';
import universalEmbed from '../index';
export default {
  ask: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle('Dont ask to ask - Just ask!')
        .addFields({
          // TODO: Turn slash command reference into a button
          name:  'Describe what your code/hardware does and what you want it to do instead. Sharing is caring! Share your code, use /tag `name: codeblock` to learn how.',
          value: 'Keep in mind: no one here is paid to help you, so the least you can do is to refine your question in a proper language.',
        }
      ),
    ],
  },
  avrdude: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle('Solving AVRDUDE communication errors (Try these in order)')
        .addFields(
        {
          name:  '1. Is your Serial monitor open?',
          value: 'If it is, close it. this allows your IDE to upload sketches without conflicts with the Serial Monitor.',
        },
        {
          name:  '2. Have you selected the right port in your IDE?',
          value: 'You could have selected something that is **not** your Arduino. Change the port in the Arduino IDE by going into Tools -> Port.',
        },
        {
          name:  '3. Have you selected the right board in your IDE?',
          value: 'You need to select the right board and model.',
        },
        {
          name:  'You need to select the right board and model.',
          value: 'If it does, unplug and re-plug your board, then check for blinking LEDs. If only the Power LED or no LEDs light up ask for further assistance (not for all boards).',
        },
        {
          name:  '5. Do you have a Nano or other Atmega 328p based board?',
          value: "If so, try using the old bootloader. In the Arduino IDE Go to Tools -> Processor and select 328p(old bootloader). If your board doesn't have an Atmega 328p, you can skip this step.",
        },
        {
          name:  '6. Does your onboard LED blink when you press the reset button?',
          value: "Try pressing the reset button on your Arduino, if the onboard LED doesn't blink when you reset, you probably have a broken bootloader, you can check out [this tutorial](https://www.arduino.cc/en/Hacking/Bootloader?from=Tutorial.Bootloader) on how to burn the bootloader.",
        },
        {
          name:  '7. Is anything connected to your Tx and Rx pins?',
          value: 'If there is, try removing everything connected to them.',
        },
        {
          name:  "8. Is this a problem on your computer's side?",
          value: "This might be a problem on your computer's side, so try restarting your computer.",
        },
        {
          name:  '9. Are you running Linux?',
          value: 'If you are running Linux, try checking which groups you belong by using the `groups` command, then look at which group you need to be in with `ls -l /dev/ttyACM*`, `ls -l /dev/S*` or `ls -ls /dev/USB*` (replace the `*` with your port number), then use this command:- `sudo usermod -a -G <group> <username>` and add your user to the necessary groups.',
        },
        {
          name:  '10. Are your drivers installed?',
          value: "Check your drivers, sometimes just reinstalling them works. If you are using a clone board, you might have the CH340 USB-Serial chip, which isn't supported by default. You can check by looking at your board and checking the SMD USB-Serial chip's name (not the big one). [Click here](https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all) to learn how to install CH340 Drivers. If you have an FTDI chip, [This website](https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/all) will show you how to install their drivers. If you don't have either we recommend googling the USB-Serial chip that your board uses.",
        },
        {
          name:  '11. Is your cable faulty or capable of sending data?',
          value: 'Some USB cables arent capable of transferring data, and some may be faulty, so make sure to try a different one to see if it works!',
        },
        {
          name:  '12. Is this a problem with your IDE?',
          value: "If you think that's the case, try reinstalling the IDE.",
        }
      ),
    ],
  },
  espcomm: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle("Solving your ESP board's communication errors (Try these in order)")
        .addFields({
          // TODO: Turn slash command reference into a button
          name:  "1. Is your Serial monitor open?",
          value: "If it is, close it. This allows your IDE to upload sketches without conflicts with the Serial Monitor.",
        },
        {
          name:  "2. Have you selected the right port in your IDE? ",
          value: "You could have selected something that is **not** your ESP. Change the port in the Arduino IDE by going into Tools -> Port.",
        },
        {
          name:  "3. Have you selected the right board in your IDE?",
          value: "You need to select the right board and model.",
        },
        {
          name:  "4. Is your Serial monitor showing gibberish?",
          value: "Try setting it to the correct baud rate (At the bottom right corner of the Serial monitor). Most examples use 115200 baud.",
        },
        {
          name:  "5. Is anything connected to your Tx and Rx pins?",
          value: "If there is, try removing everything connected to them.",
        },
        {
          name:  "6. Have you tried holding down the BOOT/FLASH button?",
          value: "Try Holding down the BOOT/FLASH button before uploading.",
        },
        {
          name:  "7. Are there any problems with your wiring?",
          value: "Check if there are any wiring errors or loose connections (Note:- if you are using an FTDI Board, FTDI TX and RX pins must be cross-connected with the ESP Tx and Rx pins(TX goes to RX)).",
        },
        {
          name:  "8. Cant see your ESP's COM Port?",
          value: "This often means you don’t have the USB drivers installed. Take a closer look at the USB chip and check its name, Go to Google and search for your particular chip to find the drivers and install them in your operating system. If you have the CP2102 chip, here are the [official drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).",
        },
        {
          name:  "Still not fixed?",
          value: "Check out these troubleshooting guides for your respective boards: [ESP32](https://randomnerdtutorials.com/esp32-troubleshooting-guide/#:~:text=When%20you%20try%20to%20upload,button%20in%20your%20ESP32%20board), [ESP32 CAM](https://randomnerdtutorials.com/esp32-cam-troubleshooting-guide/#:~:text=If%20you%20get%20this%20exact,times%2C%20might%20solve%20the%20issue.) and [ESP8266](https://randomnerdtutorials.com/esp8266-troubleshooting-guide/).",
        }
      ),
    ],
  },
  language: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle("What coding language does arduino IDE use? What language should you learn?")
        .addFields({
          // TODO: Turn slash command reference into a button
          name:  "Arduino IDE code is normally C++11",
          value: "The language most often used in Arduino IDE for programming is primarily C++11. There are some added functions that are very useful for using the Arduino platform. They can be found at https://www.arduino.cc/reference/en/",
        }
      ),
    ],
  },
  libmissing: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle("Solving library errors (such as \"yourlib.h not found\")")
        .addFields({
          // TODO: Turn slash command reference into a button
          name:  "1. Is your Library installed?",
          value: "Go to the Library Manager (Sketch -> Include Library -> Manage Libraries), search for the library, and install it. If it is already installed, try re-installing it through the library manager (Sketch -> include Library -> Manage Libraries).",
        {
          name:  "2. is your #include statement spelt correctly?",
          value: "Check for any capitalization errors as well!",
        },
        {
          name:  "Still can't fix it?",
          value: "Check out [this arduino-forum post](https://forum.arduino.cc/t/no-headers-files-h-found/596090#:~:text=This%20might%20be%20result%20from,one%20of%20the%20libraries%20folders.) for more assistance.",
        }
      ),
    ],
  },
  power: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle("Powering an arduino")
        .addFields({
          // TODO: Turn slash command reference into a button
          name:  "1. How much power can an arduino provide?",
          value: "Most PC USB ports are limited to 500ma. The Arduino has a fuse on the board to help protect your PC, and the Arduino from shorts. This is limited to 400ma. If you try to draw more current than this, the fuse will get hot and stop the short.",
        },
        {
          name:  "2. How much power can each pin of the arduino provide?",
          value: "Each pin of the Arduino is rated 20ma, or less. In many cases, if you do not provide a resistor to the circuit on a pin, then you can damage the Arduino. We use resistors for LED's or any other component that can draw more than 20ma. Motors should not be driven directly off of the arduino PIN's. Doing so risks dammageing your arduino, or the componunt conected to it.",
        },
        {
          name:  "3. Powering the Arduino properly",
          value: "On most Arduino boards there will be a pin marked VIN. This stands for Voltage Input. You can provide the max power rating for your board on this pin. UNO will accept 7-12v. If you have a regulated 5 volt power supply, you can sometimes use the 5v pin to power the Arduino. You should NOT connect batteries to the 5v or 3.3v pins. You can also power Arduino's by the USB plug **5v**, or the Barrel jack **7-12v** on some boards. If you put 5v on the vin pin your board may not work properly, and if you place over 5v on the 5v pin, you risk dammaging your board.",
        }
      ),
    ],
  },
  pullup: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle("What does pullup (or pulldown) mean, and how do I use it?")
        .addFields({
          name:  "Pins used as INPUT should not be left unconnected (floating).",
          value: "This can lead to undesired behavior. If input pins are connected to digital sensors then the sensor itself usually keeps the pin either HIGH or LOW.",
        },
        {
          name:  "Pins used with switches (pushbuttons or other) should use a resistor to 'pull' the pin HIGH or LOW.",
          value: "If the pin is connected to Vcc through a resistor it is said to be 'pulled up', if the pin goes to ground through a resistor it is said to be 'pulled down'. When a resistor is used this way the input is held at either Vcc or ground when the switch is not closed so that it is never 'floating'. Pins that are pulled down are normally LOW and go HIGH when the switch (wired to Vcc) is closed. Pins that are pulled up are normally HIGH and go LOW when the switch (wired to ground) is closed. (The resistor, often 10K, allows only a small current to flow from Vcc to ground when the switch is closed, if the pin was tied directly to a power rail closing the switch would short out the power supply!)",
        },
        {
          name:  "Many chips include internal resistors so that an external resistor doesn't need to be added to your circuit.",
          value: "On the ATmega328P chips used on many Arduino boards you can pull up the pin by using `pinMode(pin, INPUT_PULLUP)`. If the pin is declared this way it is normally HIGH and all that is needed is a switch wired from the pin to ground. When the switch is closed the pin will go LOW. The example below shows pin 2 setup this way. Remember a inturnal resistor is no replacement for a current limiting resistor like you need for a led, or any kind of load.",
        }
        //"image": "https://www.arduino.cc/wiki/static/f7e18e95df4a8d274fc9129fa60eb428/928ea/PullUp.png"
      ),
    ],
  },
  hid: {
    embeds: [
      new MessageEmbed(universalEmbed)
        .setTitle("Can your arduino be used as a keyboard, or mouse ?")
        .addFields({
          name:  "You want to use your arduino for a Human Interface Device?",
          value: "Arduino has many boards that can be used as a mouse/keyboard natively. This is reffered to as a HID.",
        },
        {
          name:  "Boards that are __NOT__ HID compliant.",
          value: "Uno, Mega, Nano, Pro mini, are not capible of use as an HID device.",
        },
        {
          name:  "Boards that __ARE__ HID compliant.",
          value: "Leonardo, (Pro)Micro, Any other 8u2/16u2/at90usb8/162/32u2/32u4 compatible board, Zero, MKR1000.",
        }
      ),
    ],
  },
};
