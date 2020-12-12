import React from 'react'
import MainBanner from '../components/Web/MainBanner';
import HomeProjects from '../components/Web/HomeProjects';
import ProjectsInfo from '../components/Web/ProjectsInfo';
import ReviewCourses from '../components/Web/ReviewCourses';

export default function Home() {
    return (
      <>
        <MainBanner />
        <HomeProjects />
        <ProjectsInfo />
        <ReviewCourses />
      </>
    );
}