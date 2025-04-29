import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - 페이지를 찾을 수 없습니다.</h1>
        <p>요청하신 페이지가 존재하지 않습니다.</p>
        <button onClick={() => navigate('/')}>home</button>
      </div>
    </>
  );
}
