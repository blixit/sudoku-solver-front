import axios, {post} from 'axios';
import { CONST } from '../constantes';

export default class Api {
  
  postString(formData) {
    const url = CONST.api.url + '/solver/string';
    
    return post(url, formData);
  }

  postFile(formData) {
    const url = CONST.api.url + '/solver/file';
    
    return post(url, formData);
  }
}