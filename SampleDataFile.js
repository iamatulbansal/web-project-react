import React from "react";

function SampleDataFile() {
  return (
    <div>
      <div className="container" style={{ backgroundColor: "white" }}>
        <h1>Candidate Profile</h1>

        <p>
          Name:&nbsp;
          <input type="text" />
        </p>

        <p>
          Email:&nbsp;
          <input type="text" />
        </p>

        <p>
          Mobile:&nbsp;
          <input type="text" />
        </p>

        <p>
          Date of Birth:&nbsp;
          <input type="text" />
        </p>

        <p>About:</p>

        <p>
          <textarea rows="10"></textarea>
        </p>

        <p>
          Address:&nbsp;<textarea></textarea>
        </p>

        <p>
          City:&nbsp;
          <input type="text" />
          &nbsp;(autocomplete)
        </p>

        <p>
          Country:&nbsp;
          <input type="text" />
          &nbsp;(autocomplete)
        </p>

        <p>&nbsp;</p>

        <p>--------------------------------</p>

        <p>&nbsp;</p>

        <p>
          Interested Job Location:&nbsp;
          <input type="text" />
          &nbsp;(Textfield -&gt; Multiple can be added as chips)
        </p>

        <p>
          Job type: <select></select>&nbsp;Any/Full/Part/Contract -&gt; Single
          selection
        </p>

        <p>
          Job Location:&nbsp;<select></select>&nbsp;Remote/Onsite/100% Remote
          -&gt; Single selection
        </p>

        <p>
          Expected Salary:&nbsp;
          <input type="checkbox" />
          Any
        </p>

        <p>Desired Min Salary (Annual):</p>

        <p>
          <input type="text" />
          &nbsp;
        </p>

        <p>
          <input type="checkbox" />
          Negotiable
        </p>

        <p>
          Job Experience:&nbsp;<select></select>&nbsp;
        </p>

        <ul style={{ listStyleType: "circle" }}>
          <li>0-1 years</li>
          <li>1-3 years</li>
          <li>3-5 years</li>
          <li>5-10 years</li>
          <li>10-20&nbsp;years</li>
          <li>20+ years</li>
        </ul>

        <p>
          -Shifts&nbsp;<select></select>&nbsp;(Any, Day shift, Morning shift,
          Night Shift)
        </p>

        <p>-Willingness to relocate</p>

        <p>-When can you join (after getting hired)?</p>

        <ul>
          <li>within a week (immediate)</li>
          <li>1 month</li>
          <li>2 months</li>
          <li>3 months</li>
          <li>
            Date:
            <input type="text" />
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>------------------------</p>

        <p>Professional Accounts:</p>

        <p>
          LinkedIn:&nbsp;
          <input type="text" />
        </p>

        <p>
          Github:&nbsp;
          <input type="text" />
        </p>

        <p>&nbsp;</p>

        <p>Open source community contribution</p>

        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          style={{ width: "500px" }}
        >
          <tbody>
            <tr>
              <td>#</td>
              <td>URL</td>
            </tr>
            <tr>
              <td>1</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <p>&nbsp;</p>

        <p>------------------------------</p>

        <p>
          Education: Note: Below education details can be added multiple times..
        </p>

        <p>***</p>

        <p>
          College/University:&nbsp;
          <input type="text" />
          &nbsp;(autocomplete)
        </p>

        <p>
          Degree:&nbsp;<select></select>&nbsp;(Bachelor&#39;s,
          Masters,&nbsp;Diploma etc)
        </p>

        <p>
          Course:&nbsp;
          <input type="text" />
        </p>

        <p>Duration: FROM - TO (date or present)</p>

        <p>
          <input name="%" type="radio" value="%" />
          %&nbsp;
          <input type="text" />
        </p>

        <p>
          <input type="radio" />
          CGPA&nbsp;
          <input type="text" />
          &nbsp;Either % or CGPA, will convert CGPA to % using formula 0.95 x
          CGPA
        </p>

        <p>***</p>

        <p>Highest Schooling:</p>

        <p>
          School:&nbsp;
          <input type="text" />
          (autocomplete)
        </p>

        <p>
          Class:&nbsp;<select></select>&nbsp;(High School, Intermediate)
        </p>

        <p>
          Board:&nbsp;
          <input type="text" /> CBSE
        </p>

        <p>
          %:&nbsp;
          <input type="text" />
        </p>

        <p>---------</p>

        <p>Break:</p>

        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          style={{ width: "500px" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Reason</th>
              <th scope="col">From-To</th>
              <th scope="col">Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>Preparing for MBA exams</td>
              <td>&nbsp;</td>
              <td>&nbsp;No</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Reason-2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <input type="button" value="Add Break" />
        </p>

        <p>---------</p>

        <p>Job History: (Multiple)</p>

        <p>-Job Title</p>

        <p>-Company Name (autocomplete)</p>

        <p>-Duration - FROM - TO&nbsp;</p>

        <p>- Location:</p>

        <p>-Roles/Responbilities</p>

        <p>-CTC</p>

        <p>---------------------</p>

        <p>Skills/Tools</p>

        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          style={{ width: "500px" }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Skill</th>
              <th scope="col">Month of Experience</th>
              <th scope="col">Self Rating</th>
              <th scope="col">Last Used when</th>
              <th scope="col">Last Used where</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Java</td>
              <td>24</td>
              <td>8</td>
              <td>&nbsp;</td>
              <td>College</td>
            </tr>
            <tr>
              <td>2</td>
              <td>MySQL</td>
              <td>5</td>
              <td>7</td>
              <td>&nbsp;</td>
              <td>Self Study</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Networking</td>
              <td>4</td>
              <td>6</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <p>LastUsed: Company, College, SelfStudy, Community</p>

        <p>-------------------</p>

        <p>Extras:</p>

        <p>
          <br />
          -Certifications
        </p>

        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          style={{ width: "500px" }}
        >
          <tbody>
            <tr>
              <td>Certification Authority</td>
              <td>Description</td>
            </tr>
            <tr>
              <td>AWS</td>
              <td>AWS Certified Developer - Associate</td>
            </tr>
            <tr>
              <td>GCP</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Java</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <p>&nbsp;</p>

        <p>-Languages</p>

        <p>
          <textarea></textarea>
        </p>

        <p>-Achievements</p>

        <p>
          <textarea></textarea>
        </p>

        <p>-Academic Excellence (top 10 in his course in college)</p>

        <p>
          <textarea></textarea>
        </p>

        <p>-Patents</p>

        <p>
          <textarea></textarea>
        </p>

        <p>-Projects</p>

        <p>
          <textarea></textarea>
        </p>

        <p>-Online Profile URL:</p>

        <p>
          <input type="text" />
        </p>

        <p>&nbsp;</p>

        <p>-----------------</p>

        <p>&nbsp;</p>

        <p>
          <input type="button" value="Submit" />
          &nbsp;
        </p>

        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default SampleDataFile;
