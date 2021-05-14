---
title: Parking Meter 2.0
date: "2021-05-06T23:46:37.121Z"
description: "new modern design for future parking meters with focus on accessibility and function"
featuredImage: "./header.png"
---

## Problem

##### Designing a touchscreen parking meter throughout a city

Parking meters are found everywhere throughout a city and it can be quite costly to replace/modify. There are more than 3 million parking spots in NYC. Respectively, there are a great number of parking meters.

_A touchscreen interface so that drivers can pay for their parking spot for a certain duration, and parking attendants can give tickets to cars who do not pay, or whose parking has expired. _

![demo](./demo.gif)

### Constraints

- There is only touch with selecting

##### Design concerns

- Readability
- Since parking meters need to be sturdy and shouldn’t be too costly, responsiveness of screen to touch can be affected

### Tasks It Should Perform

- Select parking spot
- Select duration
- Pay for spot
- See which spots are paid for

# Solving Design Concerns

### Readability

To preserve readability for all drivers, I decided to use a contrast checker to make sure my colours are comfortable for each driver.

Additionally, I opted to use big and bold texts wherever needed to make sure each component is readable

### Cost vs Design

In order to make sure the design can be adapted to any hardware technology, I decided to make the clickable components as big as possible to prevent issues with touch precision.

Furthermore, in terms of size I adopted the design for a screen just shy of a mini iPad. This minimum threshold is needed for users to navigate easily and I implemented the design to easily scale for bigger screens.

# Implementation

My solution focuses on easy usability while maintaining a simple design. Each The meter consist of at most 6 pages

![s](./steps.png)

![s](./steps-img.png)

- Iteration 1: parking spots, duration, payment
- Iteration 2: added failed and successful payment
- Iteration 3: starting page and help descriptions

**End Product**

- Drivers can easily pay for their parking with only a few taps.
- Parking attendants can see if there are any cars in the green (unpaid) spots and ticket them with only one tap.
- The meter is built to be user-friendly, minimal, easy on the eyes and functional
  ![full-wireframe](./full-wireframe.png)

# Reflection

What was challenging? Making sure any driver can easily use this parking meter and quickly pay their parking.

### Feedback

I would love to receive feedback on how the steps were laid out and whether it should be less or more steps to pay for parking.

### If I had more time

- I would add ability to select custom duration. However, this is not a common thing for parking meters
- As a bonus I want to add a reminder feature to input phone number and be reminded when your parking time is over
