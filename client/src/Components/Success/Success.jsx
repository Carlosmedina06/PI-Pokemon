import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Background, Div } from './SuccessSyles.js'
import { Button } from '../LandingPage/LandingPageStyle.js'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { clearMessages, loadingTrue } from '../../Redux/actions'

const Success = () => {
  const dispatch = useDispatch()
  const success = useSelector((state) => state.success)
  const history = useHistory()

  useEffect(() => {
    return () => {
      dispatch(clearMessages())
      dispatch(loadingTrue())
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <NavBar />
      <Background>
        <Div>{success ? success : '¡Muchos éxitos!'}</Div>
        <Button isForm={false} onClick={() => history.push('/home')}>
          Home
        </Button>
      </Background>
      <Footer />
    </>
  )
}

export default Success
