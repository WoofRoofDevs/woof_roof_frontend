import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { ShelterPage } from '../pages/SlelterPage';
import { AnimalProfilePage } from '../pages/AnimalProfilePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const PageRouter: FC = () => {
  return (
    <Routes>
      <Route path="homepage">
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/shelter" element={<ShelterPage />} />

      <Route
        path="/shelter/:shelterId/:petId"
        element={<AnimalProfilePage />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
