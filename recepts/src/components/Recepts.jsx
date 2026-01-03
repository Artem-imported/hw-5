import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import burger from '../image/burger.jpg';
import chicken from '../image/chicken.jpg';
import salad from '../image/salad.jpg';
import tomatoes from '../image/tomatoes.jpg';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fcf2c6ff;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 40px 20px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
`;

const Card = styled.div`
    border-radius: 28px;
    overflow: hidden;
    transition: 0.25s ease;
    padding-bottom: 18px;
    display: flex;
    justify-content: center;

    &:hover {
        transform: translateY(-6px);
    }
`;

const Image = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
    padding: 20px 22px 0;
`;

const Title = styled.h3`
    margin: 14px 0 14px;
    font-size: 18px;
    font-weight: 600;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 16px;
    background: #fff;
    border-radius: 14px;
    width: 100%;
    max-width: 350px;

    span {
        background: #f5f5f5;
        padding: 6px 10px;
        margin: 10px;
        border-radius: 999px;
        font-size: 13px;
        color: #555;
    }
`;

const DiffWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const DiffBtn = styled.span`
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  background: ${p => (p.active ? '#ff6b6b' : '#f1f1f1')};
  color: ${p => (p.active ? '#fff' : '#999')};
`;

const Difficulty = ({ level }) => (
  <DiffWrap>
    <DiffBtn active={level === 1}>Easy</DiffBtn>
    <DiffBtn active={level === 2}>Medium</DiffBtn>
    <DiffBtn active={level === 3}>Hard</DiffBtn>
  </DiffWrap>
);

const RecipesList = () => {
  const recipes = [
    {
      title: 'Smoked salmon burger',
      time: '20 min',
      servings: 5,
      calories: 210,
      difficulty: 1,
      image: burger
    },
    {
      title: 'Tomatoes With Creamy Feta',
      time: '15 min',
      servings: 3,
      calories: 600,
      difficulty: 1,
      image: tomatoes
    },
    {
      title: 'Spicy potato salad',
      time: '30 min',
      servings: 2,
      calories: 420,
      difficulty: 1,
      image: salad
    },
    {
      title: 'Chicken Biryani',
      time: '40 min',
      servings: 4,
      calories: 700,
      difficulty: 3,
      image: chicken
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Grid>
        {recipes.map((recipe, index) => (
          <Card key={index} hard={recipe.difficulty === 3}>
            <Image src={recipe.image} />
            <Content>
              <Title>{recipe.title}</Title>
              <Info>
                <span>⏱ {recipe.time}</span>
                <span>👥 {recipe.servings} servings</span>
                <span>🔥 {recipe.calories} calories</span>
              </Info>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '12px', maxWidth: '200px', width: '100%' }}>
                <div style={{ fontSize: 13, marginBottom: 6, color: '#888' }}>Difficulty</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Difficulty level={recipe.difficulty} />
                </div>
              </div>
            </Content>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default RecipesList;