import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGames, actionType } from '../../store/actions/gameAction';
import Card from '../../components/Card/Card';

function Home() {
  const { loading, games } = useSelector((state) => state.games)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGames.getGames())
  }, []);

  console.log(games)
  return (
    <div>
      
    </div>
  )
}

export default Home