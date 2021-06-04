import { ContainerDiv, Navbar, MainDiv, IconDiv, FooterDiv } from "./styled";
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FireIcon from './../../img/fire.svg'
import MatchesIcon from './../../img/comments.svg'
import UserIcon from './../../img/user.svg'
import TimesIcon from './../../img/times.svg'
import StarIcon from './../../img/star.svg'
import HeartIcon from './../../img/heart.svg'
import AstromatchLogo from './../../img/astromatch.png'

const Home = (props) => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose(props.profile)
    }, [props.profile])

    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person')
            .then((res) => setProfile(res.data.profile))
            .catch((err) => console.log(err))
    }

    const profiles = () => {
        return (
            <ProfileDiv>
                <img src={profile.photo} alt={profile.name} />
                <p>{profile.name}, {profile.age}</p>
                <span>{profile.bio}</span>
            </ProfileDiv>
        )
    }

    const ChoosePerson = (choices) => {
        const body = {
            id: profile.id,
            choice: choices
        }
        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/choose-person', body)
            .then((res) => getProfileToChoose())
            .catch((err) => console.log(err))
    }


    return (
        <ContainerDiv>
            <Navbar>
                <a><img src={FireIcon} /></a>
                <img src={AstromatchLogo} />
                <a onClick={() => props.changePages()}><img src={MatchesIcon} /></a>
            </Navbar>
            <MainDiv>
                {(profile && Object.keys(profile).length !== 0) && profiles()}
            </MainDiv>
            <FooterDiv>
                <IconDiv>
                    <a onClick={() => ChoosePerson(false)} ><img src={TimesIcon} /></a>
                </IconDiv>
                <IconDiv>
                    <a><img src={StarIcon} /></a>
                </IconDiv>
                <IconDiv>
                    <a onClick={() => ChoosePerson(true)} ><img src={HeartIcon} /></a>
                </IconDiv>
            </FooterDiv>
        </ContainerDiv>

    )
}

export default Home