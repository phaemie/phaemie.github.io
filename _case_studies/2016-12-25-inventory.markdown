---
title:  "Inventory stock take"
subtitle: |
  Creating a faster, easier way to tackle a stock take.
date:   2016-12-24 10:11:39 +1100
categories: jekyll update
project_type: "Mobile design sprint"
image: "Inventory_Allprod.jpg"
image_alt: "Inventory list"
excerpt: "A challenge to design a quicker and easier way to do an inventory stock take."
---


## THE PROBLEM
Cafe and restaurant owners need to keep track of what's coming in and out of their business. But many find it hard to carry out a regular rigorous inventory. My challenge was to create an easy and intuitive method to help them with stock taking.

### Details
Time: Less than a week

Tools: Sketch, Axure, pencil+paper

Techniques: User interviews, User stories, Empathy mapping and personas, Affinity diagram, Feature prioritisation, Sketching, User flows

## DISCOVER

The goal of the challenge was to create a faster, more intuitive way for hospitality business owners to do inventory, so that they are more accurate, waste less and have more time to spend on other tasks.

I set out to understand how owners and employees currently do their inventory through a combination of techniques: user interviews, user scenarios and observation.

### Key findings
* Products are measured in different units depending on what it is. Some in pieces, some in weight, some in boxes.
* Ordering stock to build to minimum levels involves guesswork and eyeballing.
* Counting every single product in every box is tedious and prone to human error.

From the key findings, I was able to empathise with the user through the following techniques.

### User stories
_"As a store manager in charge of a weekly stock take, I need a way to count products so that it’s quick and accurate."_

_"As an employee in charge of ordering supplies, I need a way to accurately gauge past orders so I know exactly how much to order this week."_

_"As a restaurant employee in charge of ordering supplies, I need a way to know what minimum levels should be so that we don’t over order."_

_"As a restaurant employee in charge ensuring minimum stock levels of many different products, I need an easy way to place an order with the supplier so that I know what's coming in and what I still have to order."_

### Empathy mapping and personas

Empathy mapping what the user sees, hears, does and thinks, as well as their pain points and goals was useful in constructing their worldview. It helped in creating user personas, focusing on motivations, pain points, goals and needs.

{% include image.html url="/assets/PersonasInventory.jpg" alt="User personas" %}

We've got a good framework for stepping into the minds and shoes of these people, so time to start figuring out what is useful to them.

## DEFINE

### Task analysis and affinity diagram

Using the personas and user stories as a guide, I brainstormed what tasks each user might do during inventory taking. Analysing tasks is useful for understand what an effective tool might look like.

{% include image.html url="/assets/affinityDiagramInventory.jpg" alt="Affinity diagram of a useful inventory system" %}

The affinity diagram helped me zoom in on features of the inventory system. To design a whole inventory system would require several sprints, so I first focused on the main function of a stock take, to count and update stock levels. In addition, the goal of the challenge was make this process easier and faster. Together these goals helped me prioritise and define the scope of the sprint.

I prioritised features by sorting them into must have, should have, could have and won't have piles. When doing inventory, people are often on their feet. For that reason, a mobile tool best lends itself to performing quick interactions while on the move.

## DESIGN SPRINT
I began sketching user flows on paper to explore ideas and how must have features might look on the screen. When I had a better concept of how the flow would work, I created low-fidelity wireframes in Axure and then static mock ups in Sketch.

{% include image.html url="/assets/Inventory_Allprod.jpg" alt="List view of all products for inventory" %}

### All items in the stock take

#### Features and rationale

* Flagged products in need of recount or with critical inventory levels shown at top of list
* User can quickly add count levels and swipe card to remove item
* Extensions: Quick order (future sprint), quick add new item
* User can select to view counts of packed units in whole and broken units. A box of 24 bottles and 4 loose bottles from the opened box can be recorded as 28 bottles or 1 box and 4 bottles.

{% include image.html url="/assets/Inventory_AddPurchasedProd.jpg" alt="Add new purchased item to inventory" %}

### Add a new item

#### Features and rationale

* Add to inventory for the first time
* Item can be used to prepare food and inventory debited against
* User can select different units and unit names (trays, boxes) to enable counting in whole and broken units

{% include image.html url="/assets/Inventory_countingDifferentUnits.jpg" alt="Counting inventory in different units" %}

### Fast and accurate counting

#### Features and rationale

* User can quickly hit add and subtract with their thumbs while their eyes and minds are focused on counting objects.
* Log counted number and confirm
* User quickly moves on to the next item by swiping screen - the interaction builds on typical mobile interactions

This is where I'm at. The next steps would be:

* Build an interactive prototype to test flows and interactions with real users.
* Iterate based on feedback and further rapid prototyping.

