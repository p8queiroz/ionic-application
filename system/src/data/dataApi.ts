import { Plugins } from '@capacitor/core';
import { Question } from '../models/Questions';
//import { Speaker } from '../models/Speaker';
import { Location } from '../models/Location';

const { Storage } = Plugins;

const dataUrl = '/assets/data/data.json';
const locationsUrl = '/assets/data/locations.json';

const HAS_LOGGED_IN = 'hasLoggedIn';
const HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
const USERNAME = 'username';

const requestInit = {
  method: 'POST',
}


export const getQuestions = async () => {
  const getQuestionsURL = `http://quizzertech.com/system/wp-json/application-api/v1/om-question`;
  return fetch(getQuestionsURL);
}

export const getConfData = async () => {
  const response = await Promise.all([
    fetch(dataUrl),
    fetch(locationsUrl),
    getQuestions(),
  ]);
  const responseData = await response[0].json();
  const responseDataQuestions = await response[2].json();

  //const questions = responseData.questions[0] as Questions;
  const questions = responseDataQuestions as Question[];

  //const sessions = parseSessions(questions);
  //const speakers = responseData.speakers as Speaker[];
  const locations = await response[1].json() as Location[];

  /*const allTracks = sessions
    .reduce((all, session) => all.concat(session.tracks), [] as string[])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort();*/

  const data = {
    questions,
    // sessions,
    locations,
    //  speakers,
    // allTracks,
    // filteredTracks: [...allTracks]
  }

  return data;
}

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME })]);
  const isLoggedin = await response[0].value === 'true';
  const hasSeenTutorial = await response[1].value === 'true';
  const username = await response[2].value || undefined;
  const data = {
    isLoggedin,
    hasSeenTutorial,
    username
  }
  return data;
}

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
}

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({ key: HAS_SEEN_TUTORIAL, value: JSON.stringify(hasSeenTutorial) });
}

export const setUsernameData = async (username?: string) => {
  if (!username) {
    await Storage.remove({ key: USERNAME });
  } else {
    await Storage.set({ key: USERNAME, value: username });
  }
}

export const setLogarUsuarioData = async (userName: string, password: string) => {
  const login = `http://quizzertech.com/system/wp-json/jwt-auth/v1/token?username=${userName}&password=${password}`;
  const response = await Promise.all([
    fetch(login, requestInit)]);
  const responseData = await response[0].json();
  return responseData;
}

/*
function parseSessions(schedule: Question) {
const sessions: Session[] = [];
  schedule.groups.forEach(g => {
    g.sessions.forEach(s => sessions.push(s))
  });
  return sessions;
}*/
