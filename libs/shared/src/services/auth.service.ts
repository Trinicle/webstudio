import { Injectable } from '@angular/core';
import {
  SupabaseClient,
  AuthSession,
  createClient,
  AuthChangeEvent,
  Session,
} from '@supabase/supabase-js';
import * as process from 'process';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    const supabaseURL = process.env['SUPABASE_URL'] || '';
    const supabaseKey = process.env['SUPABASE_KEY'] || '';

    this.supabase = createClient(supabaseURL, supabaseKey);
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({
      email: email,
      password: password,
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }
}
