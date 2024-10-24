const selectedCategories = {};
let CategorySelectionRatingsArr = [];
let overAllScorePresent = 0;
let leadershipAndVisionScore = 0;
let cultureAndCommunicatiorScore = 0;
let teachingAndLearningScore = 0;
let healthSafetyAndWellbeingScore = 0;
let administrationAndManagementScore = 0;
const maxScorePerCategory = 20;
const maxTotalScore = 100;

document.addEventListener("DOMContentLoaded", async function () {
  try {
    await loadPdfContent();
  } catch (error) {
    console.error("Error loading PDF content:", error);
  }
});

async function loadPdfContent() {
  try {
    const response = await fetch("pdf-content/teacher-pdf.html");
    const data = await response.text();
    const pdfContainer = document.querySelector(".loadPdfContent");
    if (pdfContainer) {
      pdfContainer.innerHTML = data;

      document.getElementById("overAllScore").textContent =
        Math.floor((overAllScorePresent / maxTotalScore) * 100) + "%";
      document.getElementById("leadershipAndVisionScore").textContent =
        "Score: " + leadershipAndVisionScore + "/" + maxScorePerCategory;
      document.getElementById("cultureAndCommunication").textContent =
        "Score: " + cultureAndCommunicatiorScore + "/" + maxScorePerCategory;

      document.getElementById("teachingAndLearning").textContent =
        "Score: " + teachingAndLearningScore + "/" + maxScorePerCategory;
      document.getElementById("healthSafetyAndWellbeing").textContent =
        "Score: " + healthSafetyAndWellbeingScore + "/" + maxScorePerCategory;
      document.getElementById("administrationAndManagement").textContent =
        "Score: " +
        administrationAndManagementScore +
        "/" +
        maxScorePerCategory;
    } else {
      console.error("Element with class 'loadPdfContent' not found.");
    }
  } catch (error) {
    console.error("Error loading teacher PDF content:", error);
  }
}
let lastSelectedChildCategory = null;

function showSubcategories(inputButton, categoryName) {
  if (lastSelectedChildCategory && lastSelectedChildCategory !== inputButton) {
    lastSelectedChildCategory.style.backgroundColor = "#FC766A";
  }
  inputButton.style.backgroundColor = "#5B84B1";
  lastSelectedChildCategory = inputButton;

  // onclick = "selectSubcategory(this,\'${categoryName}\', 'Guiding Statements','Star Ineffective.png')"
  const subcategory = inputButton.innerText.toLowerCase();
  const contentContainer = document.getElementById("subcategories");
  let content = "";
  let subcategorlabel = "";
  if (subcategory === CategoriesEnum[0]) {
    subcategorlabel = CategoriesEnum[0];
    // onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')"
    content = `
    <div  class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\',0)">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Limited or no self-reflection on practices<br>
          •	Minimal awareness of personal strengths and areas for improvement<br>
          •	Fails to identify and address gaps in curriculum delivery<br>
          •	Lacks initiative in seeking feedback or PD openings<br>
          •	Minimal growth or improvement in practices
          </p>
    </div>
    <div  class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\',1)">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Some self-reflection on curriculum practices<br>
          •	Moderate awareness of personal strengths and areas for improvement<br>
          •	Reasonably identifies and addresses biases or gaps in curriculum delivery<br>
          •	Occasionally seeks feedback and PD events<br>
          •	Partial improvement and growth in practices
          </p>
    </div>
    <div  class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\',2)">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Consistent and effective self-reflection on curriculum practices<br>
          •	Clear awareness of personal strengths and areas for improvement<br>
          •	Proactively identifies and addresses biases or gaps<br>
          •	Actively seeks feedback and engages in PD<br>
          •	Noticeable growth and improvement in practices
          </p>
    </div>
    <div  class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\',3)">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Advanced and insightful self-reflection <br>
          •	Deep understanding of personal strengths and areas for improvement<br>
          •	Critically examines and addresses biases or gaps<br>
          •	Actively seeks and integrates feedback from multiple sources<br>
          •	Significant improvement and growth over time
          </p>
    </div>
    <div  class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\',4)">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Exceptional and transformative self-reflection<br>
          •	Profound understanding of personal strengths and areas for improvement<br>
          •	Constantly identifies and addresses biases or gaps<br>
          •	Actively seeks and leads PD to benefit of others<br>
          •	Continuous growth and improvement over time
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[1]) {
    subcategorlabel = CategoriesEnum[1];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Demonstrates a lack of subject knowledge, often providing inaccurate information<br>
          •	Content lacks clarity and is often confusing for students<br>
          •	Sequencing of activities and content is confusing. Hinders understanding<br>
          •	Substantial parts of teaching is unsatisfactory
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Teacher has content knowledge but at times provides inaccurate information<br>
          •	Content is occasionally clear, and there are areas where it can be confusing<br>
          •	Sequencing of activities and content are moderately effective<br>
          •	Teaching is satisfactory at most
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	A solid understanding of the subject matter<br>
          •	Content is generally clear and understandable for most students<br>
          •	Sequencing of activities and content is effective in supporting understanding<br>
          •	Most teaching is good. Weaker aspects are addressed promptly
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Deep and comprehensive understanding of the subject matter<br>
          •	Content is consistently clear, making complex concepts understandable<br>
          •	Sequencing of activities and content is optimal, facilitating deep understanding<br>
          •	Reflects systematically on effectiveness of lessons
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Content knowledge is exceptional, with an in-depth mastery of subject<br>
          •	Content is exceptionally clear, promoting critical thinking and deep learning<br>
          •	Innovative sequencing of activities and content, leading to transformative learning experiences<br>
          •	Recognised for excellent classroom practice
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[2]) {
    subcategorlabel = CategoriesEnum[2];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Lacks understanding of assessment principles<br>
          •	Assessments are unclear, unorganised and not aligned with LOs, making it challenging to understand expectations<br>
          •	Assessments expose bias and lack consideration for diverse student needs, resulting in inequitable outcomes<br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Some understanding of assessment principles<br>
          •	Assessments are somewhat aligned with LOs, but clarity and organisation could be improved<br>
          •	Some efforts are made to address fairness and equity, but disparities still exist
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Solid understanding of assessment principles<br>
          •	Assessments are generally aligned with LOs, providing students with clear understanding of what is expected<br>
          •	Assessments are designed with fairness and equity in mind, though there is room for improvement
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Deep understanding of assessment principles<br>
          •	Assessments are well-aligned with LOs, offering clarity, and effectively measures students’ understanding<br>
          •	Assessments consistently fair and equitable, with efforts to minimise bias and accommodate diverse student needs
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Exceptional mastery of assessment principles<br>
          •	Assessments are extraordinarily organised, clear and fully aligned with LOs, promoting a deep understanding<br>
          •	Assessment exceptionally fair, equitable and inclusive, ensuring all students have equal opportunity for success
          </p>
      </div>
`;
  } else if (subcategory === CategoriesEnum[3]) {
    subcategorlabel = CategoriesEnum[3];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Frequently arrives late without valid reasons<br>
          •	Excessive number of days off without justification<br>
          •	Frequent absences and tardiness severely disrupt the learning environment and significantly impact student progress<br>
          •	Fails to meet minimum standards for attendance and punctuality
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	At times arrives late without valid reasons<br>
          •	Above average number of days off, often lacking reason<br>
          •	Absences or tardiness disrupt the learning environment and negatively affect student progress<br>
          •	Fails to consistently meet minimum standards for attendance and punctuality
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Usually arrives on time. Uncommonly tardy without valid reasons<br>
          •	Average number of days off, usually with valid reasons<br>
          •	Occasional absences or tardiness may disrupt the learning environment but are typically justified<br>
          •	Usually meets minimum expectations for attendance and punctuality
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently arrives on time and is very rarely absent without a valid reason<br>
              •	Strong commitment to teaching duties, taking minimal days off<br>
              •	A positive role model for other staff members and students via attendance<br>
              •	Responsible and reliable in attendance and punctuality
              </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Consistently present and punctual, arriving early <br>
          •	Perfect attendance throughout the year, with no unexcused absences or tardiness <br>
          •	Sets a positive example for other staff members and students by always being on time<br>
          •	Unwavering dedication and a deep sense of duty
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[4]) {
    subcategorlabel = CategoriesEnum[4];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Actions and behaviours consistently contradict or undermine the statements<br>
          •	Rarely advocates for or communicates the school's vision and mission to colleagues, students, or parents<br>
          •	Rarely seeks openings for alignment with the vision and mission statements
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Actions occasionally align with the school's vision and mission but may not consistently reflect them<br>
          •	Occasionally advocates for and communicates the school's vision and mission but may not consistently do so<br>
          •	Occasionally seeks alignment and progress opportunities
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Actions generally align with the statements, demonstrating an understanding of and commitment to them<br>
          •	Generally advocates for and communicates the statements to students, colleagues and parents<br>
          •	Contributing to the realisation of the vision and mission statements<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently aligns their actions with the school's vision and mission, actively promoting and upholding them<br>
          •	Actively advocates for and communicates the statements, engaging with stakeholders to promote support<br>
          •	Actively leading and facilitating initiatives<br>
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Alignment is exceptional, serving as a dedicated advocate and embodiment of these statements<br>
          •	Exceptional advocacy for and communication of the statements, inspiring and mobilising others to adopt and advance them<br>
          •	Plays a central role in shaping the statements
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[5]) {
    subcategorlabel = CategoriesEnum[5];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Limited understanding of the curriculum content <br>
          •	Significant knowledge gaps of key concepts <br>
          •	Provides inaccurate or incomplete information to students <br>
          •	Struggles to answer student questions related to the curriculum<br>
          •	Requires substantial support to improve
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Developing an understanding of the curriculum content<br>
          •	Some familiarity with key concepts and standards<br>
          •	Basic and accurate information to students<br>
          •	Answers curriculum related questions with moderate effectiveness<br>
          •	Seeks PD opportunities to enhance curriculum knowledge
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	A solid understanding of the curriculum content<br>
          •	Good grasp of key concepts and standards.<br>
          •	Clear and accurate information to students<br>
          •	Effectively answers student questions related to the curriculum<br>
          •	Up-to-date knowledge of curriculum changes and seeks improvement
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Advanced understanding of curriculum content<br>
          •	Deep and comprehensive knowledge of key concepts and standards<br>
          •	Detailed and nuanced information to students<br>
          •	Skillfully answers student curriculum questions, offering additional insight<br>
          •	Seeks improvement through collaboration
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Superior and complete content understanding<br>
          •	Mastery of key concepts and interconnections<br>
          •	Highly sophisticated and nuanced information<br>
          •	Expertly answers curriculum questions, fostering critical thinking and deep understanding<br>
          •	Actively contributes to CD, sharing expertise and serving as a resource
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[6]) {
    subcategorlabel = CategoriesEnum[6];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Rarely incorporates student-centered approaches in teaching<br>
          •	Mainly relies on teacher-centered methods<br>
          •	Minimal opportunities for student choice, collaboration, or self-direction<br>
          •	Does not create a student-centered classroom environment<br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Inconsistently attempts to integrate student-centered strategies<br>
          •	Uses student-centered approaches for specific lessons or activities<br>
          •	Limited opportunities for student choice, self-direction or collaboration<br>
          •	Beginning to create a more student-centered classroom environment
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Regularly employs student-centered strategies in teaching<br>
          •	Balances teacher- and student-centered methods effectively<br>
          •	Provides opportunities for student choice, self-direction and collaboration<br>
          •	Creates an environment that fosters student agency and independence<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently utilises student-centered approaches as the foundation of instruction<br>
          •	Entrusts students to take ownership of  learning<br>
          •	Promotes collaboration, critical thinking, and problem-solving<br>
          •	Creates a dynamic and inclusive student-centered culture
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Demonstrates exemplary expertise in student-centered learning<br>
          •	Designs instruction that is entirely student-driven, adaptive, and responsive<br>
          •	Encourages students to lead and manage their own learning journeys<br>
          •	Models for others an inclusive, transformative and innovative culture<br>
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[7]) {
    subcategorlabel = CategoriesEnum[7];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Frequently assesses student understanding incorrectly<br>
          •	Provides feedback that does not align with students' performance<br>
          •	Often misjudges students’ knowledge or skills<br>
          •	Limited or no analysis of student exam data. No adjustments in teaching<br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Occasionally assesses student understanding accurately<br>
          •	Provides feedback that generally aligns with students' performance<br>
          •	May occasionally misjudge students' knowledge or skills<br>
          •	Some data analysis, but adjustments in teaching methods are inconsistent
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Typically assesses student understanding accurately<br>
          •	Provides feedback that consistently aligns with students' performance<br>
          •	Rarely misjudges students' knowledge or skills<br>
          •	Effective data analysis that positively impacts student results<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently assesses student understanding accurately<br>
          •	Provides precise feedback that aligns with students' performance<br>
          •	Doesn’t misjudge students' knowledge or skills<br>
          •	Highly effective data analysis contributes to notable improvements<br>
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Excels in assessing student understanding with remarkable precision<br>
          •	Feedback that is highly insightful & constructive<br>
          •	Ability to discern nuances in students' knowledge and skills accurately<br>
          •	Exceptional data analysis and adaptation, leading to outstanding results<br>
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[8]) {
    subcategorlabel = CategoriesEnum[8];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Teacher conduct has a negative impact on students and the school community<br>
          •	Consistently fails to adhere to ethical guidelines and professional standards<br>
          •	There is a lack of respect for students, colleagues, and school policies<br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Teacher conduct has a limited negative impact but leaves room for improvement<br>
          •	There are occasional lapses in adherence to ethical guidelines and professional standard<br>
          •	Respect for students, colleagues, and school policies is inconsistent
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Teacher conduct positively contributes to a healthy school community<br>
          •	The teacher consistently adheres to ethical guidelines and professional standards<br>
          •	Respect for students, colleagues, and school policies is generally consistent<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Positive transformative impact on students and the school community<br>
          •	Consistently exhibits adherence to the highest ethical and professional standards<br>
          •	Respectful interaction with students, colleagues and adherence to school policies are consistently upheld<br>
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Has a life-changing impact on students and the entire school community, shaping a positive and thriving learning environment<br>
          •	Ethical adherence is unprecedented and a role model for others<br>
          •	Inspires respect, admiration and trust in the school community<br>
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[9]) {
    subcategorlabel = CategoriesEnum[9];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Seldom exhibits behaviours that reflect school values, often setting a poor example<br>
          •	Rarely supports students in understanding or upholding school values and may even discourage such efforts<br>
          •	School values are rarely integrated into the teaching activities
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Occasionally demonstrates behaviours that reflect school values but not consistently<br>
          •	Occasionally supports students in understanding and upholding school values but not consistently<br>
          •	School values are at times integrated into teaching, but lacks depth
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Generally exhibits behaviours that reflect school values, serving as a positive role model<br>
          •	Supports students in understanding and upholding school values, providing guidance and reinforcement<br>
          •	School values are generally integrated into teaching<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently displays behaviours that reflect school values, serving as an exemplary role model<br>
          •	Actively supports students in upholding school values, inspiring them to demonstrate these values<br>
          •	School values are consistently integrated into teaching
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Role modelling of school values is exceptional, setting a standard of excellence to follow<br>
          •	Exceptional support for upholding school values, creating a culture of shared values and ethical behaviour<br>
          •	School values are exceptionally integrated into teaching
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[10]) {
    subcategorlabel = CategoriesEnum[10];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Limited or no curriculum related PD engagement<br>
          •	Fails to seek openings for growth or improvement<br>
          •	Minimal initiative in exploring new instructional strategies<br>
          •	Lacks awareness of the importance of CPD<br>
          •	Minimal improvement or growth in curriculum practices over time <br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Some level of engagement in PD<br>
          •	At times seeks growth and improvement opportunities<br>
          •	Some interest in exploring new instructional strategies<br>
          •	Inconsistently recognises the importance of CPD<br>
          •	Some improvement and growth over time<br>
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Consistent and effective engagement in PD<br>
          •	Actively seeks opportunities for growth or improvement<br>
          •	Willingness to explore and implement new instructional strategies<br>
          •	Recognises importance of CPD for effective practice<br>
          •	Noticeable growth and improvement over time
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Advanced and proactive engagement in PD<br>
          •	Actively seeks and leads opportunities for growth or improvement<br>
          •	Initiative in exploring and implementing innovative instructional strategies<br>
          •	Recognises importance of CPD and actively shares<br>
          •	Significant growth and improvement over time
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Exceptional and transformative engagement in PD<br>
          •	Seeks and leads cutting-edge opportunities for growth or improvement<br>
          •	Drives innovation in instructional strategies<br>
          •	CPD role model, actively mentoring colleagues<br>
          •	Continuous growth and improvement over time
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[11]) {
    subcategorlabel = CategoriesEnum[11];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Struggles to engage and motivate students<br>
          •	Time management is poor, leading to wasted instructional time<br>
          •	Even if expectations exist, they are not clearly communicated or understood<br>
          •	Lessons generally fail to engage and challenge the students
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Often engages and motivates students<br>
          •	Time management is inconsistent, with occasional inefficiencies<br>
          •	Expectations are usually communicated, but there is room for improvement in clarity<br>
          •	Lessons engage and challenge some of the students
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Effectively engages and motivates students<br>
          •	Time is managed well, with minimal instructional time wasted<br>
          •	Expectations are clearly communicated and maintained throughout the learning process<br>
          •	Lessons engage and challenge the majority of students
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Inspires and motivates students consistently<br>
          •	Time is managed exceptionally well, maximising instructional time<br>
          •	Expectations remain consistently clear, ensuring student understanding<br>
          •	Lessons engage and challenge all students
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Inspires and motivates students to excel beyond expectations<br>
          •	Flawless management of time, optimising every moment of lessons<br>
          •	Exceptionally clear expectations, with a deep and nuanced insight into student needs<br>
          •	 Students independent, self-challenging and driven
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[12]) {
    subcategorlabel = CategoriesEnum[12];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	A notable proportion of students perform well below expected standards on exams<br>
          •	Underachievement is often not recognised or recognised too late<br>
          •	Lacks a satisfactory understanding of students learning processes<br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	A majority of students meet or approach expected standards on exams<br>
          •	Underachievement is recognised and addressed with some intervention<br>
          •	Moderate knowledge and understanding of how students learn and the impacts of teaching<br>
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Nearly all students meet the minimum expected standards on exams, demonstrating satisfactory achievement<br>
          •	Underachievement is recognised and addressed with a range of interventions<br>
          •	No groups of students consistently underperforming
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	A significant number of students consistently exceed expected standards on exams, demonstrating a high level of achievement<br>
          •	Underachievement is recognised and addressed with a range of appropriate and well planned interventions<br>
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Nearly all students consistently achieve exceptional results on exams, surpassing expected standards and showcasing mastery of the content<br>
          •	Underperformance addressed with exceptional efficiency, showing clear and successful impact
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[13]) {
    subcategorlabel = CategoriesEnum[13];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Rarely communicates with students, parents, or colleagues<br>
          •	When it does occur, it is often unclear, negative or unprofessional<br>
          •	Communication fails to engage and involves minimal interaction<br>
          •	Consistently fails to respond to student or parent inquiries
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Communicates now and again with students, parents, or colleagues<br>
          •	Communication may be inconsistent in clarity, professionalism or tone<br>
          •	Communication attempts may engage some but a minority of recipients<br>
          •	Usually responds to student or parent inquiries
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Communicates regularly with students, parents, and colleagues<br>
          •	Communication is generally clear, professional, and positive<br>
          •	Communication engages and involves most recipients<br>
          •	Responds consistently to student or parent inquiries in a timely manner<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Communicates frequently with students, parents and colleagues<br>
          •	Is consistently clear, professional, and positive, fostering strong connections<br>
          •	Effectively engages and involves all recipients<br>
          •	Responds promptly to student or parent inquiries
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Communication is exceptional, setting the standard for positivity, clarity and professionalism<br>
          •	Leads to transformative engagement, trust and strong relationships with all stakeholders<br>
          •	Responds proactively and consistently to student or parent inquiries, anticipating needs
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[14]) {
    subcategorlabel = CategoriesEnum[14];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Consistently fails to comply with school policies, regulations or standards<br>
          •	Record-keeping is inconsistent or poorly maintained<br>
          •	Consistent avoidance of feedback, evaluation, or self-assessment<br>
          •	Resistance to change or adaptations
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Occasionally exhibits non-compliance but it is not pervasive<br>
          •	Record-keeping partially maintained but lack consistency <br>
          •	Feedback, evaluation, or self-assessment is occasionally accepted but not consistently<br>
          •	Reluctance to change or adapt
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Generally compliant but may occasionally have exceptions<br>
          •	Record-keeping is effective and maintained consistently<br>
          •	Feedback, evaluation, or self-assessment is generally accepted and acted upon<br>
          •	General acceptance of change if needed
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently exhibits strong compliance with all policies and standards<br>
          •	Record-keeping is comprehensive and well organised<br>
          •	Feedback, evaluation, or self-assessment is proactively sought and embraced for growth<br>
          •	Proactively embraces change wherever needed
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Exceptional compliance, setting the standard for adherence to policies and standards <br>
          •	Record-keeping is exemplary, serving as a model for others<br>
          •	Feedback and evaluation is inspirational and self-assessment leads to remarkable growth<br>
          •	Inspires and leads change
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[15]) {
    subcategorlabel = CategoriesEnum[15];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Lack of understanding of individual students' backgrounds, interests, and prior learning experiences<br>
          •	Fails to recognise students' diverse learning styles, interests, or abilities<br>
          •	Does not use data or assessment results to inform preparation
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Displays some awareness of students' backgrounds, interests, and prior learning experiences<br>
          •	Occasionally acknowledges students' diverse learning styles, interests, or abilities<br>
          •	Uses limited data or assessment results to inform instructional preparation
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Good understanding of students' backgrounds, interests, and prior learning experiences<br>
          •	Recognises and accommodates diverse learning styles, interests, and abilities<br>
          •	Regularly uses data and assessment results to inform instructional preparation<br>
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	In-depth knowledge of individual students, their backgrounds, interests, and prior learning<br>
          •	Tailors instruction to meet individual needs and create personalised learning experiences <br>
          •	Utilises data and assessment results effectively when preparing 
          </p>
    </div>
    
     <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Extraordinary insight into students’ unique background, interests, and prior learning<br>
          •	Highly personalised and innovative instructional strategies that cater to individual needs<br>
          •	Utilises data and assessment results with exceptional precision to adapt preparation
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[16]) {
    subcategorlabel = CategoriesEnum[16];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Lack of connection with students <br>
          •	Chaotic and disorganised classroom. Disturbances<br>
          •	Struggles to maintain control over behaviour<br>
          •	Classroom rules and expectations are unclear or inconsistently imposed<br>
          •	Students are often disengaged due to the disorderly environment<br>
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Limited connection with students <br>
          •	Occasional disruptions, but not pervasive<br>
          •	Partially controls student behaviour, but with lapses<br>
          •	Classroom rules and expectations are established, but inconsistent enforcement <br>
          •	Students are engaged at times. Lapses in attention<br>
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Established connection with students <br>
          •	Classroom is generally orderly, with occasional minor disruptions<br>
          •	Effectively controls student behaviour<br>
          •	Classroom rules and expectations are clear and consistently enforced<br>
          •	Students are engaged and generally on task
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Strong connection with students<br>
          •	Classroom highly orderly. Disruptions are rare<br>
          •	Exceptional control over student behaviour<br>
          •	Rules and expectations are exemplary and consistently enforced<br>
          •	Students highly engaged and actively participate in learning activities
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Exceptional connection with students <br>
          •	Classroom exceptionally orderly. No disruptions<br>
          •	Unprecedented control over student behaviour<br>
          •	Rules and expectations are transformative, promoting a positive learning environment<br>
          •	Transformational student engagement
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[17]) {
    subcategorlabel = CategoriesEnum[17];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Demonstrates minimal impact on student growth and development<br>
          •	Student progress remains stagnant or regresses<br>
          •	Rarely provides meaningful feedback or support for individual student progress<br>
          •	Fails to adapt teaching methods to address individual needs
          </p>
          </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Has a modest impact on student growth and development<br>
          •	Some students make progress, but overall growth is limited<br>
          •	Offers occasional feedback and support for individual student progress<br>
          •	Makes sporadic efforts to address individual needs
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Consistently contributes to significant student growth and development<br>
          •	Most students make noticeable progress in their learning<br>
          •	Regular feedback and support for individual student progress<br>
          •	Good understanding of student individual needs. Adapts methods accordingly
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Has a remarkable impact on student growth and development<br>
          •	Almost all students show substantial progress in their learning<br>
          •	Exceptional ability to understand and meet individual student needs, ensuring their success<br>
          •	Proactive and targeted individual feedback 
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Has a transformational impact on student growth and development<br>
          •	Virtually all students experience remarkable progress and achievement<br>
          •	Optimises individual success, fostering a love for learning<br>
          •	Extensive, data-driven  transformational individual feedback 
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[18]) {
    subcategorlabel = CategoriesEnum[18];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Consistently demonstrates disloyalty or undermines school initiatives<br>
          •	Actions and behaviours often lead to conflicts and disruptions within the school community<br>
          •	The teacher's actions have a negative influence on the school environment
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	The teacher occasionally exhibits disloyalty but it is not pervasive<br>
          •	Conflicts and disruptions occur intermittently but are not constant<br>
          •	Limited support for school initiatives<br>
          •	The teacher's actions have a neutral or minimal influence on the school environment
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	The teacher is committed and generally loyal but may occasionally question or challenge certain aspects<br>
          •	The teacher supports school initiatives but may question some<br>
          •	The teacher's actions have a generally positive influence on the school environment<br></p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Teacher demonstrates strong loyalty to the school and provides constructive input<br>
          •	Fully supports and actively contributes to school initiatives<br>
          •	Deep and unwavering commitment, and actions have a transformative, positive influence on the school environment
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Loyalty is exceptional, serving as a model of unwavering dedication<br>
          •	Takes a pioneering role to grow school initiatives<br>
          •	Profound commitment where actions have a life-changing, positive influence on the school environment, creating a legacy of loyalty and excellence<br>
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[19]) {
    subcategorlabel = CategoriesEnum[19];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	There is no effort to collaborate with colleagues or share information and ideas<br>
          •	Rarely contributes to collaborative projects or initiatives<br>
          •	Lack of collaboration has a negative impact on students and the school community
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Limited collaboration with colleagues or information and idea sharing<br>
          •	Contributions to collaborative projects or initiatives are sporadic<br>
          •	Collaboration has some impact on students and the school community
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Collaborates effectively with colleagues and shares ideas as well as relevant information<br>
          •	Contributions to collaborative projects or initiatives are consistent<br>
          •	Collaboration positively contributes to student learning and the school community
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Collaborates remarkably well with colleagues and proactively shares ideas and relevant information<br>
          •	Contributions to collaborative projects or initiatives are extensive and impactful<br>
          •	Transformative, positive impact on student learning and the school community
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Sharing innovative information and ideas, fostering a culture of transparency and collaboration<br>
          •	Pioneering contributions to collaborative projects with groundbreaking outcomes<br>
          •	Unprecedented positive impact, creating a legacy of collaboration and excellence
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[20]) {
    subcategorlabel = CategoriesEnum[20];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Limited or no evidence of curriculum planning<br>
          •	Fails to develop clear LOs, strategies and assessment methods<br>
          •	Minimal understanding of learning objectives and alignment with standards<br>
          •	Lacks coherence in lesson and unit planning<br>
          •	Minimal adaptation or differentiation in plans
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Basic to reasonable skills in curriculum planning<br>
          •	Develops LOs, strategies and assessment methods with some effectiveness<br>
          •	Basic to reasonable understanding of curriculum goals and alignment with standards<br>
          •	Some coherence in lesson and unit planning<br>
          •	Attempts to adapt or differentiate instruction
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Proficient skills in curriculum planning<br>
          •	Clear and measurable LOs, strategies and assessment methods<br>
          •	Good understanding of curriculum goals and alignment with standards<br>
          •	Plans units and lessons with coherence<br>
          •	Effectively adapts and differentiate instruction
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Advanced skills in curriculum planning<br>
          •	Challenging, meaningful, and differentiated LOs<br>
          •	Success criteria clearly defined<br>
          •	Unit and lesson plans with deep understanding of standard alignments<br>
          •	Wide range of strategies to differentiate lessons, ensuring engagement
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Meticulous planning is informed by a range of relevant information<br>
          •	A range of differentiation which meets the needs of all students<br>
          •	All resources planned for well in advance<br>
          •	Actively evaluates the outcome of the lessons<br>
          •	Outcome informs next year’s planning
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[21]) {
    subcategorlabel = CategoriesEnum[21];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	There is little to no differentiation to address diverse student needs<br>
          •	Teaching is uniform, with no adaptations for individual learning styles, abilities, or interests<br>
          •	Students with special needs or diverse backgrounds receive minimal support<br>
          •	Ineffective strategies to meet diverse students’ needs
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Some attempts are made to differentiate learning, but it lacks consistency<br>
          •	Some adaptations to lessons are made, but they are not consistent<br>
          •	Limited support is provided to students with special needs or diverse backgrounds<br>
          •	Some strategies are effective to meet diverse students’ needs
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Learning is differentiated to address diverse student needs. May be room for improvement<br>
          •	Consistent adaptations, but may not fully meet all student needs<br>
          •	Support is provided to students with special needs or diverse backgrounds<br>
          •	Effective strategies to meet diverse students’ needs
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Learning is consistently differentiated, effectively addressing diverse needs<br>
          •	Learning adaptations are comprehensive and well-aligned with individual learning profiles<br>
          •	Robust support is provided to students with special needs or diverse backgrounds<br>
          •	Very effective strategies to meet diverse students’ needs
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Differentiation strategies are exceptional, providing tailored support for all students<br>
          •	Learning adaptations are highly customised and result in transformative learning experiences<br>
          •	Highly tailored support to special needs or  diverse backgrounds students<br>
          •	Transformative strategies to meet diverse students’ needs
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[22]) {
    subcategorlabel = CategoriesEnum[22];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Rarely available for pupils and provides minimal opportunities for seeking help<br>
          •	Provides nominal guidance and assistance to pupils, often offering inadequate support<br>
          •	Rarely considers individual student needs and preferences, offering generic support
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Occasionally available, but access to support is inconsistent/challenging<br>
          •	Offers basic guidance and assistance, but needs improvements in the quality of support<br>
          •	Occasionally takes individual needs into account but lacks consistency in personalisation
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Generally accessible to pupils during scheduled times. Some flexibility<br>
          •	Normally provides satisfactory guidance and assistance, addressing most pupils' needs effectively<br>
          •	Usually personalises support to meet individual needs and preferences
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Consistently available to pupils during scheduled hours and is responsive to their needs<br>
          •	Regularly delivers high-quality guidance and assistance, meeting needs with excellence<br>
          •	Constantly offers highly personalised support, tailoring assistance to each effectively
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Exceptionally accessible, offering multiple avenues to seek assistance and demonstrating a strong commitment to being available<br>
          •	Provides guidance and assistance of exceptional quality, going above and beyond to ensure success<br>
          •	Excels in individual and personalised support, to maximise potential
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[23]) {
    subcategorlabel = CategoriesEnum[23];

    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Consistently fails to take responsibility for actions and outcomes, with a negative impact on student learning and the school community<br>
          •	Does not take ownership of student outcomes or classroom management<br>
          •	Effort to improve or address issues is minimal or nonexistent
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	The teacher occasionally takes responsibility for actions and outcomes<br>
          •	The teacher takes partial ownership of student outcomes or classroom management<br>
          •	Effort to improve or address issues is sporadic<br>
          •	Accountability issues have a limited impact but need improvement
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Generally takes responsibility for actions and outcomes<br>
          •	Takes ownership of student outcomes and classroom management<br>
          •	Consistently makes efforts to improve and address issues<br>
          •	Accountability positively impacts learning and the school community
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Strong accountability for actions and outcomes<br>
          •	Takes full ownership of student outcomes <br>
          •	Continuous effort is made to improve and address issues, leading to ongoing growth<br>
          •	Has a transformative, positive impact on learning and the school community
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	A model of integrity and responsibility<br>
          •	Visionary ownership of student outcomes<br>
          •	Continuous improvement efforts set a pioneering standard for excellence<br>
          •	Life-changing, positive impact on student learning and the school community, shaping a culture of excellence
          </p>
    </div>
`;
  } else if (subcategory === CategoriesEnum[24]) {
    subcategorlabel = CategoriesEnum[24];
    content = `
    <div class="subcategory-item" value="0" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[0]}\')">
        <img src="assets/images/Star Ineffective.png" alt="Ineffective">
        <span><b>Ineffective</b></span>
        <p>•	Safety and wellbeing are compromised due to poor management<br>
          •	Shows little to no concern for students' physical or emotional wellbeing<br>
          •	Lacks awareness of health and safety guidelines<br>
          •	Engages in unsafe practices
          </p>
    </div>
    <div class="subcategory-item" value="1" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[1]}\')">
        <img src="assets/images/Star Improving.png" alt="Improving">
        <span><b>Improving</b></span>
        <p>•	Safety and wellbeing are generally maintained but could be improved<br>
          •	Intermittent concern for students' wellbeing, with room for improvement <br>
          •	Some awareness of health and safety guidelines but is not consistently mindful of them<br>
          •	Sometimes engages in unsafe practices
          </p>
    </div>
    <div class="subcategory-item" value="2" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[2]}\')">
        <img src="assets/images/Star Competent.png" alt="Competent">
        <span><b>Competent</b></span>
        <p>•	Safety and wellbeing are well protected<br>
          •	Consistent concern for students' physical and emotional wellbeing<br>
          •	Is aware of health and safety guidelines and consistently complies with them<br>
          •	Engages in safe practices and follows safety protocols
          </p>
    </div>
    <div class="subcategory-item" value="3" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[3]}\')">
        <img src="assets/images/Star Accomplished.png" alt="Accomplished">
        <span><b>Accomplished</b></span>
        <p>•	Safety and wellbeing are optimised, with proactive measures in place<br>
          •	Prioritises and fosters holistic wellbeing<br>
          •	Exemplary awareness of health and safety guidelines and sets a high standard for compliance<br>
          •	Develops innovative safety practices for students' benefit
          </p>
    </div>
    <div class="subcategory-item" value="4" onclick="selectSubcategory(this,\'${categoryName}\', \'${subcategorlabel}\',\'${Colors[4]}\')">
        <img src="assets/images/Star Distinguished.png" alt="Distinguished">
        <span><b>Distinguished</b></span>
        <p>•	Commitment to student health, safety and wellbeing serves as a model of excellence<br>
          •	Pioneers innovative initiatives and programs<br>
          •	Exemplary compliance with guidelines<br>
          •	Visionary leadership in creating a culture of health, safety and wellbeing
          </p>
    </div>
`;
  }

  contentContainer.innerHTML = content;
}

let lastSelectedSubcategory = null;

function selectSubcategory(
  thisInput,
  categoryName,
  subcategoryHeading,
  imageName
) {
  if (lastSelectedSubcategory && lastSelectedSubcategory !== thisInput) {
    lastSelectedSubcategory.classList.remove("transparent");
  }
  thisInput.classList.add("transparent");
  lastSelectedSubcategory = thisInput;
  categoriesscore(categoryName, thisInput);
  var subcategoryDetails = {
    subcategoryHeading: subcategoryHeading,
    image: imageName,
    selectedSubcategoryContent:
      thisInput.getElementsByTagName("p")[0].innerHTML,
  };
  let isHeaderCount = 0;
  CategorySelectionRatingsArr.forEach(function (item, i) {
    if (categoryName === item.categoryHeader) {
      isHeaderCount++;
      CategorySelectionRatingsArr[i].subcategoryList.push(subcategoryDetails);
    }
  });
  if (isHeaderCount === 0) {
    var CategorySelectionRating = {
      categoryHeader: categoryName,
      subcategoryList: [subcategoryDetails],
    };
    CategorySelectionRatingsArr.push(CategorySelectionRating);
  }
  const buttons = document.querySelectorAll("button");

  CategorySelectionRatingsArr.forEach((categoryItem) => {
    categoryItem.subcategoryList.forEach((subcategory) => {
      buttons.forEach((button) => {
        if (
          button.innerText.toLowerCase() ===
          subcategory.subcategoryHeading.toLowerCase()
        ) {
          button.classList.add("transparent-button");
        }
      });
    });
  });

  console.log(CategorySelectionRatingsArr);
}

function categoriesscore(categoryName, thisInput) {
  if (categoryName === "PREPARATION") {
    leadershipAndVisionScore += parseInt(thisInput.getAttribute("value"));
    document.getElementById("leadershipAndVisionScore").textContent =
      "Score: " + leadershipAndVisionScore + "/" + maxScorePerCategory;
  } else if (categoryName === "DELIVERY") {
    cultureAndCommunicatiorScore += parseInt(thisInput.getAttribute("value"));
    document.getElementById("cultureAndCommunication").textContent =
      "Score: " + cultureAndCommunicatiorScore + "/" + maxScorePerCategory;
  } else if (categoryName === "PERFORMANCE") {
    teachingAndLearningScore += parseInt(thisInput.getAttribute("value"));
    document.getElementById("teachingAndLearning").textContent =
      "Score: " + teachingAndLearningScore + "/" + maxScorePerCategory;
  } else if (categoryName === "PROFESSIONALISM") {
    healthSafetyAndWellbeingScore += parseInt(thisInput.getAttribute("value"));
    document.getElementById("healthSafetyAndWellbeing").textContent =
      "Score: " + healthSafetyAndWellbeingScore + "/" + maxScorePerCategory;
  } else if (categoryName === "COMMITMENT") {
    administrationAndManagementScore += parseInt(
      thisInput.getAttribute("value")
    );
    document.getElementById("administrationAndManagement").textContent =
      "Score: " + administrationAndManagementScore + "/" + maxScorePerCategory;
  }

  overAllScorePresent =
    leadershipAndVisionScore +
    cultureAndCommunicatiorScore +
    teachingAndLearningScore +
    healthSafetyAndWellbeingScore +
    administrationAndManagementScore;

  document.getElementById("overAllScore").textContent =
    Math.floor((overAllScorePresent / maxTotalScore) * 100) + "%";
}

async function generateReport() {
  try {
    appendDynemicDataOnPdf();
    const pdfContent = document.getElementById("pdfContent");
    pdfContent.style.display = "block";
    html2pdf()
      .from(pdfContent)
      .set({
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
          before: "#page2el",
        },
        filename: "generated.pdf",
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .outputPdf("bloburl")
      .then(function (pdfUrl) {
        window.open(pdfUrl, "_blank");
      })
      .catch(function (error) {
        console.error("Error generating PDF:", error);
      })
      .finally(function () {
        pdfContent.style.display = "none";
      });
  } catch (error) {
    console.error("Error in generateReport:", error);
  }
}

function appendDynemicDataOnPdf() {
  var principal = document.getElementById("principal-name");
  principal.textContent = document.getElementById("teacherName").value;
  var school = document.getElementById("school-name");
  school.textContent = document.getElementById("school").value;
  var appraisal = document.getElementById("appraisal-period");
  appraisal.textContent = document.getElementById("position").value;
  var Assessor = document.getElementById("assessor-name");
  Assessor.textContent = document.getElementById("assessor").value;
  document.getElementById("date").textContent = formatDateTime();

  const leadershipTableRow = document.querySelector(
    ".leadershipAndVision .tableRow"
  );
  const cultureAndCommunicationRow = document.querySelector(
    ".CultureAndCommunication .tableRow"
  );
  const teachingAndLearningRow = document.querySelector(
    ".TeachingAndLearning .tableRow"
  );
  const healthSafetyandWellbeingRow = document.querySelector(
    ".HealthSafetyandWellbeing .tableRow"
  );
  const administrationManagementRow = document.querySelector(
    ".AdministrationManagement .tableRow"
  );
  const overAllContentRow = document.getElementById("overAllContent");
  const overAllStarImage = document.getElementById("overAllStar");
  const mdTextValue = document.getElementById("mdText");

  if (leadershipAndVisionScore <= 2) {
    leadershipTableRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Ineffective.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You have minimal self-reflection, and your understanding of the curriculum is inadequate, leading to poorly structured lesson plans with limited resources and teaching strategies. You struggle to align your planning with curriculum standards and lack an understanding of individual students' prior learning experiences. </div>`;
  } else if (leadershipAndVisionScore >= 3 && leadershipAndVisionScore <= 7) {
    leadershipTableRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Improving.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You have some self-reflection and are working to build a better understanding of the curriculum, while also improving your lesson planning skills. You strive to align your lessons with curriculum standards, and display some awareness of students' backgrounds, interests, and prior learning experiences.</div>`;
  } else if (leadershipAndVisionScore >= 8 && leadershipAndVisionScore <= 12) {
    leadershipTableRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Competent.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You have consistent and effective self-reflection and solid grasp of the curriculum, creating well-structured lesson plans with appropriate resources and teaching strategies. You align with curriculum standards, and have a good understanding of students' backgrounds, interests, and prior learning experiences.</div>`;
  } else if (leadershipAndVisionScore >= 13 && leadershipAndVisionScore <= 17) {
    leadershipTableRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Accomplished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You have insightful self-reflection and a deep understanding of the curriculum, crafting well-structured lesson plans with effective resources and teaching strategies, ensuring every aspect is purposeful and engaging. You fully align with curriculum standards and ensure in-depth knowledge of each learner.</div>`;
  } else if (leadershipAndVisionScore >= 18 && leadershipAndVisionScore <= 20) {
    leadershipTableRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Distinguished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You have exceptional self-reflection and deep and comprehensive understanding of the curriculum, crafting exceptionally well-structured lesson plans that incorporate innovative resources and teaching strategies. You have unique knowledge of learners, and actively evaluates the outcome of the lessons.</div>`;
  }

  if (cultureAndCommunicatiorScore <= 2) {
    cultureAndCommunicationRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Ineffective.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You frequently fail to engage students and create a stimulating learning environment. Your lack of effective communication skills makes it difficult for students to grasp complex concepts or participate actively. Uninspiring teaching methods result in disinterest among students and a chaotic ambience.</div>`;
  } else if (
    cultureAndCommunicatiorScore >= 3 &&
    cultureAndCommunicatiorScore <= 7
  ) {
    cultureAndCommunicationRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Improving.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You strive to engage students more effectively. While aiming to improve your communication skills, you may still struggle to convey complex concepts clearly. You are in the process of refining your teaching methods to create a more engaging learning environment. There are disruptions, but not pervasive.</div>`;
  } else if (
    cultureAndCommunicatiorScore >= 8 &&
    cultureAndCommunicatiorScore <= 12
  ) {
    cultureAndCommunicationRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Competent.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You engage students through dynamic and effective teaching methods, with individual adaptations. You communicate complex concepts clearly and foster active participation and discussions, creating an orderly classroom and engaging learning environment, with only occasional minor disruptions.</div>`;
  } else if (
    cultureAndCommunicatiorScore >= 13 &&
    cultureAndCommunicatiorScore <= 17
  ) {
    cultureAndCommunicationRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Accomplished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You create a dynamic and stimulating learning environment. You communicate complex concepts with clarity and foster active participation and meaningful discussions. Your teaching methods are diverse, engaging, and tailored to students' needs, resulting in an inspiring and effective learning experience.</div>`;
  } else if (
    cultureAndCommunicatiorScore >= 18 &&
    cultureAndCommunicatiorScore <= 20
  ) {
    cultureAndCommunicationRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Distinguished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You create a captivating and immersive learning environment, conveying complex concepts with unparalleled clarity and stimulate active participation and profound discussions. Your teaching methods are creative, and tailored to students' unique needs, resulting in a transformative learning atmosphere.</div>`;
  }

  if (teachingAndLearningScore <= 2) {
    teachingAndLearningRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Ineffective.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You exhibit significant shortcomings that are reflected in your students' poor progress. They may struggle due to your lack of understanding of assessment principles and inadequate support. Your data analysis is very limited and has minimal impact on student growth and development.</div>`;
  } else if (teachingAndLearningScore >= 3 && teachingAndLearningScore <= 7) {
    teachingAndLearningRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Improving.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You aspire to achieve student success and growth. You are learning to properly assess student performance, but your strategies may not always be effective. Your data analysis and sporadic efforts to address individual needs are insufficient and has a modest impact on student growth and development.</div>`;
  } else if (teachingAndLearningScore >= 8 && teachingAndLearningScore <= 12) {
    teachingAndLearningRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Competent.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You are dedicated to student success, frequently assessing and guiding individual and group performance. Your effective data analysis and valuable personalised support ensures that most students make noticeable progress in their learning, leading to consistent and satisfactory student outcomes.</div>`;
  } else if (teachingAndLearningScore >= 13 && teachingAndLearningScore <= 17) {
    teachingAndLearningRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Accomplished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You are deeply committed to student success and growth, continually assessing individual and group performances. Your highly effective data analysis and dedication to each student's development add notable value and leads to consistently high academic and personal achievements.</div>`;
  } else if (teachingAndLearningScore >= 18 && teachingAndLearningScore <= 20) {
    teachingAndLearningRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Distinguished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">Your unwavering dedication to student success has a transformational impact on their growth and development. Your commitment continuous improvement, data-driven decision-making, to value addition, and individualised support, culminates in outstanding academic results and personal achievements.</div>`;
  }

  if (healthSafetyAndWellbeingScore <= 2) {
    healthSafetyandWellbeingRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Ineffective.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You display various unprofessional practice and attitudes in terms of attendance, conduct, loyalty, communication, and accountability. You exhibit a reluctance to improve, and your actions and behaviours have a negative influence on the school environment, and often lead to conflicts.</div>`;
  } else if (
    healthSafetyAndWellbeingScore >= 3 &&
    healthSafetyAndWellbeingScore <= 7
  ) {
    healthSafetyandWellbeingRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Improving.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You display varying levels of professional practice and attitudes in terms of attendance, conduct, loyalty, communication, and accountability. Efforts to improve are sporadic, and your actions and behaviours can negatively influence the school environment, but conflicts are not pervasive.</div>`;
  } else if (
    healthSafetyAndWellbeingScore >= 8 &&
    healthSafetyAndWellbeingScore <= 12
  ) {
    healthSafetyandWellbeingRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Competent.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You display a high level of professional practice and attitudes in terms of attendance, conduct, loyalty, communication, and accountability. Efforts to improve and adhere to ethical guidelines are consistent, and your actions and behaviours positively contributes to the school environment.</div>`;
  } else if (
    healthSafetyAndWellbeingScore >= 13 &&
    healthSafetyAndWellbeingScore <= 17
  ) {
    healthSafetyandWellbeingRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Accomplished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You consistently exhibit and adherence to the highest ethical and professional standards in terms of attendance, conduct, loyalty, communication, and accountability. Continuous effort is made to improve and address issues, leading to a transformative impact on learning and the school community.</div>`;
  } else if (
    healthSafetyAndWellbeingScore >= 18 &&
    healthSafetyAndWellbeingScore <= 20
  ) {
    healthSafetyandWellbeingRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Distinguished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">Your professional standards in terms of attendance, conduct, loyalty, communication, and accountability are unparalleled and a model for others to follow. Visionary and continuous whole-school improvement efforts set a pioneering standard, creating a legacy of professionalism and excellence.</div>`;
  }

  if (administrationAndManagementScore <= 2) {
    administrationManagementRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Ineffective.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You lack commitment to the school's vision and mission statements, values, compliance with policies and standards, collaboration and student health, safety and wellbeing. Your reluctance to share ideas and information, negatively impacts the support for guiding statements and wellbeing.</div>`;
  } else if (
    administrationAndManagementScore >= 3 &&
    administrationAndManagementScore <= 7
  ) {
    administrationManagementRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Improving.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You are inconsistently committed to the school's vision and mission statements, values, compliance with policies and standards, collaboration and student health, safety and wellbeing. At times you share ideas and information, but no evident impact on the support for guiding statements and wellbeing.</div>`;
  } else if (
    administrationAndManagementScore >= 8 &&
    administrationAndManagementScore <= 12
  ) {
    administrationManagementRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Competent.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You are generally committed to the school's vision and mission statements, values, compliance with policies and standards, collaboration and student health, safety and wellbeing. You share ideas and relevant information, with some impact on the support for guiding statements and wellbeing.</div>`;
  } else if (
    administrationAndManagementScore >= 13 &&
    administrationAndManagementScore <= 17
  ) {
    administrationManagementRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Accomplished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You are dedicated to the school's vision and mission statements, values, compliance with policies and standards, collaboration and student health, safety and wellbeing. You proactively share relevant information and ideas, with a positive impact on the support for guiding statements and wellbeing.  </div>`;
  } else if (
    administrationAndManagementScore >= 18 &&
    administrationAndManagementScore <= 20
  ) {
    administrationManagementRow.innerHTML = `<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">
                    <img src="assets/images/Star Distinguished.png" style="width: 35px;height: 35px;" />
                </div>
                <div class="tableTxtBOld">You exhibit an exceptional commitment to the school's vision and mission statements, values, compliance with policies and standards, collaboration and student health, safety and wellbeing. You share innovative information and ideas, fostering a culture of support for guiding statements and wellbeing.  </div>`;
  }
  debugger;
  if (overAllScorePresent <= 14) {
    overAllStarImage.innerHTML = `<img src="assets/images/Star Ineffective.png" style="width: 45px;height: 45px;" />`;
    overAllContentRow.textContent = `You consistently fail to meet expectations and are, in various aspect of your teaching profession, not fulfilling your roles and responsibilities adequately. Your level of performance requires a commitment to change and immediate attention and intervention to address deficiencies.`;
  } else if (overAllScorePresent >= 15 && overAllScorePresent <= 39) {
    overAllStarImage.innerHTML = `<img src="assets/images/Star Improving.png" style="width: 45px;height: 45px;" />`;
    overAllContentRow.textContent = `You fall short of expectations in various aspects of your teaching profession. While you may perform adequately in some aspects there are notable areas that need improvement. Commitment to improvement and additional support, training, or development is required to reach the desired level of competence.`;
  } else if (overAllScorePresent >= 40 && overAllScorePresent <= 64) {
    overAllStarImage.innerHTML = `<img src="assets/images/Star Competent.png" style="width: 45px;height: 45px;" />`;
    overAllContentRow.textContent = `You are proficient, providing clear leadership and vision that guide the school effectively. You foster a positive culture with good communication and uphold high standards in teaching and learning. Student health, safety, and wellbeing are well-managed, and administrative practices are efficient and organised. Continued focus on enhancing leadership skills, nurturing a cohesive culture, improving teaching quality, and refining administrative processes will further strengthen the school's performance and student outcomes.`;
  } else if (overAllScorePresent >= 65 && overAllScorePresent <= 89) {
    overAllStarImage.innerHTML = `<img src="assets/images/Star Accomplished.png" style="width: 45px;height: 45px;" />`;
    overAllContentRow.textContent = `You meet established standards, and possess the necessary skills, knowledge and qualities that enable you to effectively educate and inspire your students and deliver work of good quality. You embody the attributes expected in a dedicated and effective educator.`;
  } else if (overAllScorePresent >= 90 && overAllScorePresent <= 100) {
    overAllStarImage.innerHTML = `<img src="assets/images/Star Distinguished.png" style="width: 45px;height: 45px;" />`;
    overAllContentRow.textContent = `You consistently meet or exceed expectations and are committed to continuous improvement. Your high level of expertise, effectiveness in your teaching profession, and consistent high-performance outcomes, has a profound, positive impact on your students and the school community.`;
  }

  if (overAllScorePresent <= 39) {
    mdTextValue.textContent = "You do not meet expectations";
  } else if (overAllScorePresent >= 40 && overAllScorePresent <= 69) {
    mdTextValue.textContent = "You meet expectations";
  } else if (overAllScorePresent >= 70 && overAllScorePresent <= 100) {
    mdTextValue.textContent = "You exceed expectations";
  }

  CategorySelectionRatingsArr.forEach(function (item, i) {
    trHeaderHtmls = "";
    item.subcategoryList.forEach(function (subItem, i) {
      var trHtml =
        "<tr>" +
        '<td class="title">' +
        subItem.subcategoryHeading +
        "</td>" +
        "<td>" +
        '<div class="tableRow">' +
        '<div style="display: flex;align-items: center;justify-content: center;margin-right: 10px;">' +
        '<img src="assets/images/' +
        subItem.image +
        '" style="width: 35px;height: 35px;"/>' +
        "</div>" +
        '<div class="tabletxt">' +
        subItem.selectedSubcategoryContent +
        "</div>" +
        "</div>" +
        "</td>" +
        "</tr>";

      trHeaderHtmls += trHtml;
    });

    if (item.categoryHeader == "PREPARATION") {
      document
        .getElementsByClassName("leadershipAndVision")[0]
        .getElementsByTagName("tbody")[0].innerHTML += trHeaderHtmls;
    } else if (item.categoryHeader == "DELIVERY") {
      document
        .getElementsByClassName("CultureAndCommunication")[0]
        .getElementsByTagName("tbody")[0].innerHTML += trHeaderHtmls;
    } else if (item.categoryHeader == "PERFORMANCE") {
      document
        .getElementsByClassName("TeachingAndLearning")[0]
        .getElementsByTagName("tbody")[0].innerHTML += trHeaderHtmls;
    } else if (item.categoryHeader == "PROFESSIONALISM") {
      document
        .getElementsByClassName("HealthSafetyandWellbeing")[0]
        .getElementsByTagName("tbody")[0].innerHTML += trHeaderHtmls;
    } else if (item.categoryHeader == "COMMITMENT") {
      document
        .getElementsByClassName("AdministrationManagement")[0]
        .getElementsByTagName("tbody")[0].innerHTML += trHeaderHtmls;
    }
  });
}

function formatDateTime() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hours = "" + d.getHours(),
    minutes = "" + d.getMinutes(),
    seconds = "" + d.getSeconds();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;
  if (seconds.length < 2) seconds = "0" + seconds;

  return (
    [year, month, day].join("-") + " " + [hours, minutes, seconds].join(":")
  );
}
