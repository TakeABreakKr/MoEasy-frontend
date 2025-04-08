# MoEasy Front-End

## Project Overview

MoEasy Front-End is the client-side application for MoEasy, a meeting and scheduling service. This project is built as a monorepo, consisting of two main packages:

- **`packages/service`**: Contains the Next.js application, which is the main service. It handles routing, page rendering, data fetching, and business logic.
- **`packages/components`**: Houses reusable React components, hooks, and utilities used across the service. This package is designed to be shareable and is managed as a separate public repository [MoEasy-storybook](https://github.com/TakeABreakKr/MoEasy-storybook) as a submodule for component documentation and showcasing.

## Tech Stack

- **Service (`packages/service`)**:
  - Framework: [Next.js](https://nextjs.org) 15+
  - Styling: [Vanilla Extract](https://vanilla-extract.style/) for type-safe CSS-in-JS
  - Testing: [Playwright](https://playwright.dev/) for end-to-end testing and [Vitest](https://vitest.dev/) for unit testing
  - Deployment: AWS EC2 (details to be configured)
- **Components (`packages/components`)**:
  - Library: [React](https://reactjs.org) 19+
  - Storybook: [Storybook](https://storybook.js.org/) for component development and documentation
  - Build & Deployment: GitHub Pages (for Storybook)

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/ko/installation#npm-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0) package manager is required. Install it globally if you haven't already.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd moeasy-frontend
   ```
2. Install dependencies for both service and components:
   ```bash
   pnpm install
   ```

### Development

- **Service**:
  ```bash
  pnpm service dev
  ```
  - Access the service at `http://localhost:4000`.
- **Components (Storybook)**:
  ```bash
  pnpm components storybook
  ```
  - Access Storybook at `http://localhost:6006`.

### Type generate

- **Service**:

  - First, add `swagger-spec.json`[not managed by git] on `packages/service/src/shared/api` directory.
  - Then, run the following command:

  ```bash
  pnpm service gen-type
  ```

  - After type generated, you can find type-generated file name `my-schema.ts` in `packages/service/src/shared/api` directory.

### Testing

- **Service**:
  - End-to-end tests (Playwright):
    ```bash
    pnpm service e2e-test
    ```
  - Unit tests (Vitest):
    ```bash
    pnpm service test:unit
    ```
- **Components**:
  - Storybook interactions and visual tests (if configured).

## Deployment

- **Service**: Deployment to AWS EC2 is configured but details are pending. (To be updated)
- **Components (Storybook)**: Deployed to GitHub Pages automatically on push to the `main` branch (details to be updated).
  - To trigger deploy, you only need to push new files to origin repository.
  ```bash
  git subtree push --prefix=packages/components https://github.com/TakeABreakKr/MoEasy-storybook.git main
  ```

## Contributing

(Contribution guidelines to be added)

---

This README provides a technical overview of the MoEasy Front-End project. For more details, refer to the documentation within each package (`packages/service` and `packages/components`).
