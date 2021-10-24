import * as database from './database';
import { dictToList } from '../utils/dataUtils';

export async function getQuestions() {
  const questionsDict = await database._getQuestions();
  const questions = dictToList(questionsDict);
  return questions;
}

export async function getUsers() {
  const usersDict = await database._getUsers();
  const users = dictToList(usersDict);
  return users;
}
