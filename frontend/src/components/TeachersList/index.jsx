import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts';
import { TeacherProfile } from '../';
import Footer from '../../components/Footer/index.jsx';

export default function TeachersList() {
  const { setRating } = useContext(UserContext);
  const [data, setData] = useState([]);

  const searchTeachersAPI = async () => {
    try {
      const response = await fetch(`https://backend-dialects.onrender.com/api/teacher/allTeachers`);
      const result = await response.json();
      setData(result);
      setRating(result);
      console.log(result, '<<<<<<', result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchTeachersAPI();
  }, []);

  return (
    <>
      <div class="general wf-section">
        <div class="overview fluentcontent wf-section">
          <div class="content-wrapper-m-copy center content-section-title">
            <div class="w-richtext">
            <h1 class="page-title">Meet the Teachers</h1>
              <section id="our-team" class="teacher-section wf-section">
                <section class="content-wrapper-centered-about">
                  <div class="title-wrapper-jobs-v1">
                    <p class="heading-paragraph">
                      Below is some of our top teachers. They've been hand-picked by our team to ensure you get the best learning experience possible.
                    </p>
                  </div>
                  <div class="team-content-wrap">
                    <div class="w-layout-grid grid-2">
                      {data.map((teacher) => <TeacherProfile data={teacher} key={teacher.teacher_id} />)}
                    </div>
                  </div>
                </section>
                <a href="/message" class="cta-btn fluentcontentbtn w-button">Found one? Start chatting now!</a>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
