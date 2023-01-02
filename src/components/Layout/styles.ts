import styled from 'styled-components'

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: 70px auto;

   /* Layout
        HD -> Header
        CT -> Content
        AS -> Aside
   */

    grid-template-areas: 
    'AS HD'
    'AS CT';

    height: 100vh;

    @media screen and (max-width: 600px) {
          grid-template-columns: 100%;
          grid-template-rows: 70px auto;

          grid-template-areas: 
          'HD'
          'CT';
    }
`