import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>This is homepage</div>
      <button onClick={() => navigate('/projects')}>Click Me</button>
    </>
  );
}
