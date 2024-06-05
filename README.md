# Quiz Application

## Overview

This Quiz Application is designed to test users' knowledge on various subjects like HTML, CSS, JavaScript, and Accessibility. The application supports keyboard navigation for enhanced accessibility, allowing users to select answers and navigate through questions using keyboard keys.

## Features

- Multiple-choice quiz on different subjects.
- Navigation using keyboard:
  - Arrow Down key to navigate through options.
  - Enter key to submit the selected answer.
  - Spacebar key to move to the next question.
- Visual feedback for correct and incorrect answers.
- Results summary at the end of the quiz.
- Responsive design with styled components.
- Light and Dark mode to improve User experience

## Technologies Used

- React
- TypeScript
- Styled Components
- React Router

## Components

### Main Components

1. **Quiz**: The main component handling the quiz logic and rendering.
2. **Card**: A reusable component to display each option.
3. **Button**: A reusable button component.
4. **ProgressBar**: A component to show quiz progress.

### Styled Components

Styled components are used for consistent styling across the application.

- `StyledNumber`
- `StyledOption`
- `StyledOptionIndex`
- `StyledOptions`
- `StyledProgress`
- `StyledQuestion`
- `StyledQuiz`
- `StyledQuizContent`
- `TotalQuestion`
- `StyledLink`
- `StyledQuizTitle`
- `StyledSubtitle`
- `StyledTitle`
- `StyledWelcomeTitle`
- `ErrorWrapper`
- `ErrorMessage`
- `Image`
- `Result`
- `ResultCard`
- `ResultCardImage`
- `CorrectAnswer`
- `IconTitleWrapper`

## Context

The `AppContext` is used to manage global state, such as the quiz data and user selections.

## Keyboard Navigation

- **Arrow Down key**: Navigate through the options.
- **Enter key**: Submit the selected answer.
- **Spacebar key**: Move to the next question.

## Mouse Navigation
- **Click**: User can click on the options and submit button to navigate through the entire app


## Setup and Installation

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/bismarkboateng/quiz_app.git
```

2. Navigate to the project directory:

```sh
cd quiz-app
```

3. Install dependencies:

```sh
npm install
```

or

```sh
yarn
```

4. Start the development server:

```sh
npm start
```

or

```sh
yarn dev
```

## File Structure

```
quiz-app/
├── public/
│   ├── vite.svg
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── AppWrapper/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Navbar/
│   │   ├── ProgressBar/
│   │   └── Switch/
│   ├── context/
│   │   └── AppContext.tsx
│   ├── pages/
│   │   ├── Home/
│   │   └── Quiz/
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.styles.ts
│   ├── data.json
│   ├── index.css
│   ├── main.ts
│   └── ...
├── package.json
└── README.md

```

## Usage

1. Navigate to the quiz application in your browser.
2. Select a quiz subject.
3. Click to select any option
4. Click on submit answer button - you'll get a feedback on whether you choose the correct or wrong answer
5. Click on next question button to move on.
6. Complete the quiz to see your results.

# Using the keyboard
1. Navigate to the quiz application in your browser.
2. Select a quiz subject.
3. Use the Arrow Down key to navigate through the options.
4. Press the Enter key to submit your selected answer.
5. Use the Spacebar key to move to the next question.
6. Complete the quiz to see your results.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.


## Contact

For any questions or feedback, please contact us at bismarkb609@gmail.com