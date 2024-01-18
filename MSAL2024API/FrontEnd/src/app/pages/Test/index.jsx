import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from "../../../authConfig";
import { ApiService } from '../../services/ApiService';
export function TestPage() {  
  const { instance } = useMsal();

  async function handleClick(e) {
    e.preventDefault();
    if (instance) {
      const accessToken = await instance.acquireTokenSilent(loginRequest)
        .then(response => response.accessToken)
        .catch(error => {
          console.error(error);
          return null
        });
      if (accessToken !== null) {
        ApiService.testApi(accessToken);
      }
    }
  }

  return (
    <div className="row">
      <div className="col">
        <h2>Welcome</h2>
        <AuthenticatedTemplate>
          <button type='button' className='btn btn-primary' onClick={handleClick}>Click me</button>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <h3>You need to login</h3>
        </UnauthenticatedTemplate>
      </div>
    </div>
  );
}
