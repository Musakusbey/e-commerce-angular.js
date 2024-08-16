import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserProfile() {
    // Kullanıcı profili verisini döndür
    return { name: 'John Doe', email: 'john.doe@example.com' };
  }
}
