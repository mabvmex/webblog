import React from 'react'
import MainBanner from '../components/Web/MainBanner';
import HomeProjects from '../components/Web/HomeProjects';
import ProjectsInfo from '../components/Web/ProjectsInfo';

export default function Home() {
    return (
      <>
        <MainBanner />
        <HomeProjects />
        <ProjectsInfo/>
      </>
    );
}