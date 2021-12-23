import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetPlayerProfile } from '../helpers/GetPlayerProfile';

const PlayerBio = ({ profile, personId }) => {
  return (
    <div className='playerbio'>
      {profile && (
        <>
          <div className='playerbio__container'>
            <div className='playerbio__headshot'>
              <img
                src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`}
                alt=''
              />
            </div>
            <div className='playerbio__fundamentals'>
              <div className='playerbio__current'>
                <img src={`/images/${profile.team.tricode}.png`} alt='Logo for players team' />
                <p>{profile.team.fullName}</p>
                <p>#{profile.bio.jersey}</p>
                <p>{profile.bio.pos}</p>
              </div>
              <div className='playerbio__name'>
                <p>{profile.bio.firstName}</p>
                <p>{profile.bio.lastName}</p>
              </div>
            </div>
          </div>
          <div className='playerbio__details'>
            <div>
              <p>Height</p>
              <p>
                {profile.bio.heightFeet}' {profile.bio.heightInches}"
              </p>
            </div>
            <div>
              <p>Weight</p>
              <p>{profile.bio.weightPounds}lbs</p>
            </div>
            <div>
              <p>Birthdate</p>
              <p>{profile.bio.dateOfBirthUTC}</p>
            </div>
            <div>
              <p>College</p>
              <p>{profile.bio.collegeName}</p>
            </div>
            <div>
              <p>Draft</p>
              {profile.bio.draft ? (
                <p>
                  {profile.bio.draft.seasonYear} R{profile.bio.draft.roundNum} Pick{' '}
                  {profile.bio.draft.pickNum}{' '}
                </p>
              ) : (
                <p>Undrafted</p>
              )}
            </div>
            <div>
              <p>Experience</p>
              <p>
                {profile.bio.yearsPro > 0
                  ? profile.bio.yearsPro > 1
                    ? profile.bio.yearsPro + ' Years'
                    : profile.bio.yearsPro + ' Year'
                  : 'Rookie'}
              </p>
            </div>
            <div>
              <p>Country</p>
              <p>{profile.bio.country}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerBio;
