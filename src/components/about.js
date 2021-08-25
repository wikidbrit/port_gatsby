import React from "react"

import "../styles/desktop.css"
import ProfileImage from "../images/profileimage2.png"

export default function about() {
  return (
    <div id="about" className="aboutWrapper">
      <div className="whoIAm ">
        <span className="code h2code2 top">{"<h2>"}</span>
        <h2 className="percent wiaH2">Who I am</h2>
        <span className="code h2code2 bottom">{"</h2>"}</span>
      </div>
      <div className="paulImage">
        <span className="h2code code Top">{"<img src={superCoolGuy}>"}</span>
        <img
          className="circleImage"
          src={ProfileImage}
          alt="Paul Fleming Posing in a Circle"
        ></img>
        <span className="h2code code Top">{"</img>"}</span>
      </div>
      <div className="aboutText">
        <span className="code pcode">{"<p src={interestingText}>"}</span>
        <p>
          I'm a graphic designer, front end developer, logo maker, technical writer, UI/UX designer and a blanket fort expert. 
          <br></br>
          <br></br>I am self driven and motivated to learn more about the
          skills needed to be successful and improve. Always eager to learn, I am constantly  looking for inspiration and ways to improve my designs and workflow.
          <br></br>
          <br></br>
          Ask me about Star Trek, skateboarding, movies, cycling, NFL football, and how to break your leg with minimum effort. {" "}
        </p>
        <span className="code pcode2">{"<p>"}</span>
      </div>
      <div className="stuffIKnow display">
        <span className="code top sik1">{"<h3>"}</span>
        <h3>Stuff I Know</h3>
        <span className="code sik2 bottom">{"</h3>"}</span>
      </div>

      <div className=" display iconSet">
        <svg
          className="html display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M105.11247,99.85432,131.48454,406.19,249.8239,440.21382l118.65649-34.07251,26.407-306.287Zm234.75806,72.704L338.216,191.60591l-.72754,8.4364H249.86321v-.00037H198.68205l3.30982,38.4729h47.87134V238.514h84.3269l-.89209,10.08947-8.52051,98.91065-.54,6.34521-74.24365,21.32032v.00134l-.16406.04871-74.31592-21.36988-5.08179-58.97949h36.4187l2.58155,29.96411,40.39746,11.29248.03345-.00989v-.00256l40.46753-11.30517,4.2019-48.73218H249.99431v.00073H168.81267l-8.9082-103.52954-.86866-10.08936H340.73943Z" />
        </svg>

        <svg
          className="css display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M131.47492,410.25761,105.11256,107.41832H394.88744l-26.39752,302.791L249.82413,443.893Zm118.65153-243.5361H159.2412l.8687,9.96193,1.65493,18.83035.72791,8.35225H301.31348l-3.31015,38.03338H249.9972v.001H206.86363l.86881,9.96233,1.64318,18.83056.72752,8.35164h39.89578v-.00081h44.7729l-4.22824,48.16392-40.45924,11.17587v.01741l-.02449.00728-40.40073-11.17587-2.58223-29.62161H170.65572L175.738,355.9293l74.31011,21.12585.1757-.048v-.0164l74.22935-21.06188.5517-6.27294,6.16556-70.61181h.01488l8.90881-102.36071.8688-9.96193Z" />
        </svg>
        <svg
          className="js display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M415.4633,101.205H84.74089a.09988.09988,0,0,0-.09692.10254V451.48405a.09973.09973,0,0,0,.09692.10254H415.4633a.09974.09974,0,0,0,.09693-.10254V101.30753A.09989.09989,0,0,0,415.4633,101.205ZM272.50945,352.35758c0,34.2168-18.74317,49.27246-46.53516,49.27246-25.20654,0-39.42529-13.68677-46.53516-30.11108l25.20655-14.37085c5.17065,8.89624,9.04882,17.1084,20.03613,17.1084,10.34106,0,16.8042-4.1062,16.8042-20.53052V240.12589h31.02344Zm73.03418,51.325c-29.08423,0-47.82764-14.37085-56.87574-33.53222l25.8523-15.74c6.46338,11.634,15.51221,19.84619,30.37695,19.84619,12.92676,0,21.32861-6.84375,21.32861-16.42408,0-10.94946-8.40185-15.0559-22.62109-21.89892l-7.75537-3.42212c-22.62158-10.26465-37.48706-22.583-37.48706-49.27246,0-24.63574,17.45093-43.79761,45.24243-43.79761,20.03613,0,34.25537,7.52783,43.9502,26.68921L363.64079,282.5546c-5.17065-10.26513-10.9873-14.37085-20.03613-14.37085-9.04858,0-14.86523,6.15894-14.86523,14.37085,0,9.58106,5.81665,13.687,19.38965,19.84644l7.75561,3.42163c26.49951,12.31763,41.3645,23.9519,41.3645,52.00976C397.24919,387.25846,375.27434,403.68253,345.54363,403.68253Z" />
        </svg>
        <svg
          className="git display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M181.61815,230.591q-20.15748,0-20.16859,23.70616,0,22.09313,20.16859,22.09312,19.54006,0,19.52337-22.41573a28.16957,28.16957,0,0,0-4.472-16.008A17.70187,17.70187,0,0,0,181.61815,230.591Z" />
          <path d="M74.80138,101.19165V451.6H425.19862V101.19165Zm207.13687,245.8165H243.25861V234.42893A106.97766,106.97766,0,0,1,231.7782,237.655c1.702,4.89475,3.0036,9.48914,3.0036,13.76092q0,20.50788-12.32586,35.70942a48.76677,48.76677,0,0,1-31.86037,18.0772q-12.81534,1.90229-12.81533,13.78317c0,2.75885,1.3683,5.54,4.14941,8.32106,3.63768,4.03818,8.944,6.619,15.99692,7.65361q45.80484,7.0918,45.777,38.12341,0,49.65945-59.28207,49.64832c-16.20829,0-29.65772-2.89235-40.10356-8.63257-13.23807-7.26425-20.0351-18.70016-20.0351-34.27435,0-17.92146,9.23327-30.22509,29.43524-36.833v-.62294c-7.29763-4.49426-10.546-11.32466-10.546-20.50233,0-11.95876,3.24833-19.43437,10.546-22.438v-.64522c-7.29763-2.33612-12.88209-7.67586-18.22182-15.99693A50.76362,50.76362,0,0,1,126.53,253.97454q0-23.07763,16.364-38.4349,15.68544-14.40057,37.456-14.40613a56.09421,56.09421,0,0,1,28.6899,7.67585c10.03424,0,21.70377-2.48075,34.241-7.36437v-6.708h38.67964V347.00815Zm-2.7255-176.29995c-4.39415,4.69451-9.55587,7.04177-15.5297,7.04177a20.90012,20.90012,0,0,1-15.86343-7.04177,23.645,23.645,0,0,1-6.56341-16.65327,23.91059,23.91059,0,0,1,6.56341-16.96475,20.87852,20.87852,0,0,1,15.86343-7.04176q8.92736,0,15.5297,7.04176a24.06393,24.06393,0,0,1,6.58565,16.96475A23.66583,23.66583,0,0,1,279.21275,170.7082ZM375.75054,340.734c-7.31987,4.30514-17.09826,6.42991-28.20043,6.42991-15.57419,0-26.07566-5.56222-32.04948-16.68665q-6.74139-12.44823-6.75253-39.36934V236.24221H289.6697V200.93327h19.0784V180.55332h34.53022c.178,5.02824.43385,15.72995.5451,20.37995h29.591V236.2422H343.86791v56.47872c0,14.29489,4.62777,21.459,14.05016,21.459,6.60791,0,12.0255-1.791,17.86584-5.43984v32.005h-.03337Z" />
          <path d="M157.93424,377.92292q0,16.60323,28.16705,16.631,24.66285,0,24.65174-17.29849,0-16.33622-26.89887-16.34178Q157.92311,360.94707,157.93424,377.92292Z" />
        </svg>
        <svg
          className="react display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M252.161,315.14906c18.9332,0,34.28183-15.988,34.28183-35.71031S271.0942,243.72843,252.161,243.72843s-34.28184,15.988-34.28184,35.71032S233.2278,315.14906,252.161,315.14906Z" />
          <path d="M382.36784,220.54829c-6.61579-2.50625-13.53257-5.012-20.74979-7.20493,1.80429-7.51768,3.30815-15.0359,4.511-22.24029,6.3148-41.34885-.60145-70.481-19.84739-81.75791a36.1843,36.1843,0,0,0-19.24594-5.012c-21.05025,0-47.81442,16.28891-74.879,43.54133-27.06462-27.25242-53.82824-43.54133-74.87849-43.54133a36.18305,36.18305,0,0,0-19.246,5.012c-19.24595,11.59018-26.16272,40.72234-19.84738,81.75791,1.20287,7.20439,2.70619,14.72261,4.5105,22.24029a203.89434,203.89434,0,0,0-20.74927,7.20493c-37.58995,15.0359-58.03878,35.71033-58.03878,58.89046S84.6569,323.2933,121.94613,338.3292c6.6158,2.50627,13.532,5.012,20.74927,7.20494-1.80431,7.51769-3.30763,15.0359-4.5105,22.24029-6.31534,41.34886.60143,70.4808,19.84738,81.75785a36.1845,36.1845,0,0,0,19.246,5.012c21.3507,0,48.11487-16.289,74.87849-43.54126,27.06461,27.25225,53.82878,43.54126,74.879,43.54126a36.18574,36.18574,0,0,0,19.24594-5.012c19.24594-11.59033,26.16219-40.72228,19.84739-81.75785-1.20288-7.20439-2.70674-14.7226-4.511-22.24029a203.90176,203.90176,0,0,0,20.74979-7.20494c37.58948-15.0359,58.03828-35.71031,58.03828-58.89045S419.95732,235.58419,382.36784,220.54829Zm-44.50625-95.54072c12.32917,7.51778,16.53922,30.69846,11.42728,63.58924a195.56292,195.56292,0,0,1-4.21,20.67443,343.97236,343.97236,0,0,0-49.61872-7.831A449.23461,449.23461,0,0,0,264.18543,160.718c22.25314-22.86739,44.80725-38.52963,63.15076-38.52963A19.68686,19.68686,0,0,1,337.86159,125.00757ZM304.18118,310.76368c-5.41292,10.02393-11.72825,20.04786-18.34406,30.07179-11.1263.93982-22.25312,1.25311-33.6804,1.25311-11.72773,0-22.85456-.31329-33.68041-1.25311q-9.9237-15.03589-18.04307-30.07179c-5.71338-10.33722-11.12629-20.98771-15.93779-31.32493,4.8115-10.33722,10.22441-20.98771,15.93779-31.32491,5.41292-10.02393,11.72827-20.04786,18.34406-30.0718,11.12629-.93984,22.25312-1.25312,33.68041-1.25312,11.72772,0,22.85455.31328,33.6804,1.25312q9.92368,15.03591,18.04307,30.0718c5.71337,10.3372,11.1263,20.98769,15.93779,31.32491C315.007,289.776,309.89455,300.11317,304.18118,310.76368Zm24.95933-10.33722c4.511,10.96377,8.11964,21.61426,11.42728,32.26422a318.46684,318.46684,0,0,1-32.47753,5.95181c3.60861-5.95181,7.51821-12.21636,10.82583-18.79473C322.52472,313.26937,325.83287,306.69154,329.14051,300.42646Zm-76.98379,84.89012c-7.21723-8.14424-14.13348-16.91559-20.74927-25.99967,6.91625.31328,13.833.62657,20.74927.62657,6.91678,0,13.833-.31329,20.74981-.62657C266.29072,368.401,259.374,377.17234,252.15672,385.31658ZM196.22319,338.3292a318.31822,318.31822,0,0,1-32.47754-5.95179c3.30817-10.33669,6.91678-21.30047,11.42728-32.26424,3.30816,6.2651,6.61579,12.84294,10.22441,19.108C189.006,326.11284,192.61458,332.06465,196.22319,338.3292ZM175.17293,258.451c-4.5105-10.96377-8.11911-21.61426-11.42728-32.26422a318.466,318.466,0,0,1,32.47754-5.95181c-3.60861,5.95181-7.51769,12.21636-10.82585,18.79474C181.78872,245.60812,178.48109,252.186,175.17293,258.451Zm76.98379-84.89013c7.21724,8.14478,14.134,16.91559,20.74981,25.99968-6.91678-.31328-13.833-.62656-20.74981-.62656-6.91625,0-13.833.31328-20.74927.62656C238.02324,190.4765,244.93949,181.70569,252.15672,173.56091ZM318.91609,239.343l-10.82583-18.79474a318.32166,318.32166,0,0,1,32.47753,5.95181c-3.30764,10.33668-6.91625,21.30046-11.42728,32.26423C325.83287,252.186,322.52472,245.60812,318.91609,239.343Zm-163.891-50.74622c-5.11247-32.89078-.90242-56.07146,11.42728-63.58924a19.68631,19.68631,0,0,1,10.52486-2.81921c18.04307,0,40.59718,15.349,63.15076,38.52963a409.36006,409.36006,0,0,0-31.27467,40.72229,393.61189,393.61189,0,0,0-49.61818,7.831C157.43084,202.0663,156.228,195.17519,155.0251,188.59681ZM80.74756,279.43875c0-14.72261,17.14092-30.38507,47.21293-41.97541a175.24043,175.24043,0,0,1,19.24595-6.57784A468.41742,468.41742,0,0,0,165.24951,279.752c-7.21723,16.6023-13.53258,32.89078-18.04307,48.55323C105.70715,315.77564,80.74756,296.98036,80.74756,279.43875Zm85.70482,154.4311c-12.3297-7.51771-16.53975-30.69837-11.42728-63.58917a195.42171,195.42171,0,0,1,4.21-20.67442,343.96543,343.96543,0,0,0,49.61818,7.831A449.32925,449.32925,0,0,0,240.128,398.15951c-22.25313,22.8674-44.8067,38.52985-63.15076,38.52985A19.685,19.685,0,0,1,166.45238,433.86985Zm182.83649-63.58917c5.11194,32.8908.90189,56.07146-11.42728,63.58917a19.68553,19.68553,0,0,1-10.5254,2.81951c-18.04307,0-40.59665-15.34918-63.15076-38.52985a409.28,409.28,0,0,0,31.27468-40.72228,393.61972,393.61972,0,0,0,49.61872-7.831C346.88312,356.81119,348.086,363.70231,349.28887,370.28068Zm27.06461-48.86652a175.23887,175.23887,0,0,1-19.24594,6.57784,468.42281,468.42281,0,0,0-18.04307-48.86654c7.21722-16.6023,13.532-32.89077,18.04307-48.55324,41.49906,12.52965,66.45841,31.32492,66.45841,48.86653C423.566,294.16136,406.12428,309.82383,376.35348,321.41416Z" />
        </svg>
        <svg
          className="gatsby display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M249.99969,90.98682a168.05279,168.05279,0,0,1,67.18008,14.0571,175.252,175.252,0,0,1,56.95241,40.03089,185.59907,185.59907,0,0,1,38.05439,59.911,193.03484,193.03484,0,0,1,13.36291,70.66989c0,48.97746-18.49536,95.94846-51.4173,130.58084-32.92194,34.63184-77.57349,54.088-124.13249,54.088a168.05242,168.05242,0,0,1-67.1795-14.05727,175.24048,175.24048,0,0,1-56.95242-40.03074C92.94589,371.60412,74.4506,324.63312,74.4506,275.65566s18.49529-95.94846,51.41717-130.58085C158.78971,110.443,203.44127,90.98682,249.99969,90.98682Zm0,36.93377c-65.47945,0-120.4265,47.09083-136.05031,110.8013L285.10977,418.77431c60.5648-16.43582,105.32964-74.2369,105.32964-143.11865H298.27624V303.356h60.56427c-8.602,37.67243-34.4075,68.14308-68.28863,81.993L145.72336,232.99743c16.502-43.95118,56.878-74.97554,104.27633-74.97554,37.39231,0,70.22013,19.20555,90.93478,48.937L362.52732,187.384C336.89693,151.18886,296.16966,127.92059,249.99969,127.92059ZM109.56055,275.65566c0,39.18208,14.79595,76.75877,41.13383,104.46457,26.33733,27.70581,62.05858,43.27051,99.30531,43.27051C250.70227,423.39074,251.57993,423.39074,109.56055,275.65566Z" />
        </svg>
        <svg
          className="figma display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M252.15886,93.01956h-57.769a56.17207,56.17207,0,0,0-40.81934,17.947,63.83321,63.83321,0,0,0,.01611,86.55786,56.16977,56.16977,0,0,0,40.84888,17.93018,56.16933,56.16933,0,0,0-40.84888,17.93066,63.83179,63.83179,0,0,0,0,86.57422A56.16888,56.16888,0,0,0,194.425,337.88968a56.16839,56.16839,0,0,0-40.83838,17.92969,63.83178,63.83178,0,0,0,0,86.57421,55.49486,55.49486,0,0,0,81.69727,0,63.12078,63.12078,0,0,0,16.91992-43.28711V215.45462h-.04492Z" />
          <path d="M350.82463,197.52444a63.8324,63.8324,0,0,0,0-86.5747,56.16883,56.16883,0,0,0-40.84888-17.93018H252.20744V215.45462h57.76831A56.16975,56.16975,0,0,0,350.82463,197.52444Z" />
          <path d="M309.97575,215.45462a56.1696,56.1696,0,0,0-40.84863,17.93066,63.83246,63.83246,0,0,0,0,86.57422,55.49616,55.49616,0,0,0,81.69751,0,63.83179,63.83179,0,0,0,0-86.57422A56.16932,56.16932,0,0,0,309.97575,215.45462Z" />
        </svg>
        <svg
          className="photoshop display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M74.4506,96.7669V454.54424H425.54948V96.7669Zm110.03,208.977v53.08179H153.9445V194.11431c23.36694-2.65185,65.519-6.0476,83.55505,9.21143,12.90882,10.90942,18.35315,28.9602,18.35315,46.89429C255.8527,294.69512,222.00431,308.48882,184.48063,305.744Zm117.428,53.73267c-15.08691.16259-24.84192-3.32642-37.90967-10.188v-25.1687a2.543,2.543,0,0,1,.658-2.04712c.658-.67456,1.99634,0,1.99634,0,37.38794,23.959,67.15246.79077,36.52588-11.46753-21.55249-8.63013-39.18018-18.91138-39.18018-45.03345,0-35.07763,44.76074-41.59082,70.75952-28.14551,3.562,1.8606,4.90039,2.18628,4.90039,6.16407l.06836,16.72461c.02222,3.53564-.817,7.55957-5.92151,4.32641-8.41662-5.39673-28.42614-15.07324-35.6405-8.676-6.53381,5.76855-8.28088,17.21289,12.2959,25.26123A159.10936,159.10936,0,0,1,331.696,292.81036C357.58146,311.18682,350.57133,358.9649,301.90861,359.47662Z" />
          <path d="M185.79655,216.58453a2.99251,2.99251,0,0,0-1.31592,1.34912v62.61889c17.78613,0,43.80786-.6748,42.33338-32.49584C225.52079,220.3294,211.11466,215.25884,185.79655,216.58453Z" />
        </svg>
        <svg
          className="indesign display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <path d="M258.04045,270.53194a59.85618,59.85618,0,0,0-4.658,24.79516c.38647,20.4712,10.9978,40.53638,37.991,38.43433V254.71871C278.03593,253.73921,264.40275,256.27144,258.04045,270.53194Z" />
          <path d="M74.4506,92.23824v366.835H425.54948V92.23824ZM206.14982,358.03047a1.35309,1.35309,0,0,1-1.31811,1.38526H175.81608a1.35269,1.35269,0,0,1-1.31811-1.38526V191.656a1.35284,1.35284,0,0,1,1.31811-1.38525h29.01563a1.35324,1.35324,0,0,1,1.31811,1.38525Zm114.2627-4.32348c-2.77222,1.36157-5.99854,2.79467-7.93018,3.60717-9.67957,4.10865-20.72241,5.54175-31.08337,5.01612-36.01429-1.88672-61.12232-25.00952-60.57654-66.00025.4541-33.99121,13.83752-49.2312,28.35693-59.62182,17.60913-12.61255,35.40076-9.31641,39.55872-9.69873.22717-.02344,1.318.11987,1.318,0l.27234-38.12354,34.28772.69287v153.188l.52258,3.36841C326.32,350.38667,324.3433,351.77242,320.41252,353.707Z" />
        </svg>

        <svg
          className="illustrator display icon"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 551.31132"
        >
          <polygon points="209.967 282.427 243.254 282.427 226.101 213.818 209.967 282.427" />
          <path d="M75.34294,87.16334V453.06959H425.54948V87.16334ZM292.789,355.4607h-29.0332c-1.56128.02344-2.71533-.54687-3.30371-2.87842l-11.337-39.46679h-46.1405l-9.50452,39.895c-.49744,1.52246-.65613,2.35547-3.55249,2.45019l-27.40393.02344c-1.81006-.02344-1.92358-.7373-1.4707-2.18848l42.452-152.68066a36.10219,36.10219,0,0,0,.95032-13.72608c-.13574-1.61816-.11316-2.4746,1.47119-2.4746l40.21167.11865a.70991.70991,0,0,1,.76905.52392l47.95117,168.14405C295.18754,354.77125,295.02946,355.48414,292.789,355.4607Zm46.31519-1.02295a1.32429,1.32429,0,0,1-1.28955,1.35645H310.162a1.32471,1.32471,0,0,1-1.29016-1.35645V235.08619a1.32471,1.32471,0,0,1,1.29016-1.35644h27.65259a1.32429,1.32429,0,0,1,1.28955,1.35644ZM323.98893,217.60133A16.15331,16.15331,0,1,1,340.05546,201.448,16.10982,16.10982,0,0,1,323.98893,217.60133Z" />
        </svg>
      </div>
    </div>
  )
}
