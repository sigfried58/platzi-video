import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

render(
  <Media
    title="¿Qué es responsive Design?"
    author="LeonidasEsteban"
    image="./images/covers/responsive.jpg"
  />,
  app
);
