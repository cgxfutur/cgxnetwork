# Smart Veggie Calorie Guide

A lightweight progressive web experience that helps shoppers understand the calorie content of fresh vegetables while they are at the grocery store. Use your phone camera to identify produce with an on-device MobileNet model or browse nutrition data manually.

## Features
- 📸 **Camera scanning** – capture a photo of a vegetable and let TensorFlow.js MobileNet suggest what it is.
- 🧮 **Calorie insights** – see calories, fiber, vitamins, and quick health notes for each vegetable.
- 🥗 **Healthy alternatives** – discover other low-calorie veggies to mix into your meals.
- 🔎 **Manual search** – filter through a curated list of common vegetables instantly.

## Getting started
1. Open `index.html` in a modern browser (Chrome, Edge, Safari, or Firefox).
2. Allow camera access when prompted so the app can analyze vegetables.
3. Tap **Start Camera**, line up the produce, then capture and analyze the photo.
4. Scroll the manual list or tap any item to learn more if scanning is unavailable.

> ⚠️ Camera access requires HTTPS in production or `localhost` while developing. If testing locally from the file system, manual search will still work but camera access may be blocked by the browser.

## Tech stack
- Vanilla HTML, CSS, and JavaScript
- [TensorFlow.js](https://www.tensorflow.org/js) with the MobileNet image classification model

Feel free to extend the dataset, hook it into a backend nutrition API, or bundle it with your favorite static site generator.
