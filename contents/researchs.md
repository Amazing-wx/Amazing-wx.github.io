
<h3>Project 1: Robot Perception and 3D Reconstruction - Robotics Algorithm Engineer (Intern) Qiaojie ShuWu Company | *Jul 2025 - Sep 2025*.</h3>

<p><strong>Description:</strong> Based on the collected RGB video streams, algorithms such as VGGT, DGGN-SLAM, Colmap, and 3D-GS were employed to achieve 3D reconstruction and high-fidelity rendering of indoor and outdoor scenes. The optimized mesh models were extracted and imported into Isaacsim to construct a simulation environment suitable for robot perception and navigation tasks </p>
<p>1Developed and integrated 3D reconstruction algorithms (VGGT, DROID-SLAM, MegaSAM, Colmap, 3DGS) using RGB videos to achieve high-precision scene reconstruction.<p>
<p>2.Applied PGSR to extract mesh models and built simulation datasets in Isaac Sim for robot perception tasks.</p>
<p>3.Independently conducted debugging and testing for multiple algorithms and authored comprehensive technical reports and reproduction documentation, delivering a reliable basis for the team's subsequent research.<p>

<!-- Add video below the carousel -->
        <section id="video-section2" class="video-section" style="margin-top: 2px; margin-bottom: 2px;">
<div class="container px-2">
    <header>
        <h3> COLMAP+3DGRUT </h3>
    </header>
    <div class="main-body d-flex justify-content-center">
        <!-- Video Embed -->
        <video controls autoplay muted style="max-width: 800px; width: 100%;">
            <source src="static/assets/video/3DGS.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</section>
<!-- Add video below the carousel -->
<section id="video-section3" class="video-section" style="margin-top: 2px; margin-bottom: 2px;">
<div class="container px-2">
    <header>
        <h3> PGSR(COLMAP+3DGS+MESH) </h3>
    </header>
    <div class="main-body d-flex justify-content-center">
        <!-- Video Embed -->
        <video controls autoplay muted style="max-width: 800px; width: 100%;">
            <source src="static/assets/video/staris.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</section>
</div>

<div class="project-section">
<h3>Project 2: Design and Control of a Stabilization Platform Based on IMU and Visual Fusion (Postgraduate stage).</h3>
<p><strong> This work received  in a 2-million-RMB horizontal project sponsored by China Guangdong Nuclear Power Group (CGN), titled "Research on Motion Control of a Six-Degree-of-Freedom Stable Platform at Sea", and successfully secured a grant of 300,000 RMB from the Guangdong Province (Approval Number: 2023A1515240062).</p>
<p><strong>Description:</strong> Offshore operations are vulnerable to the ship disturbance caused by waves. To improve the accuracy of offshore equipment, ensure the safety of operation personne and increase the window for offshore operations. Designed a 6-DOF Stewart parallel platformto compensate for the wave motion disturbance. </p>
<p>1.Designed a doubled-motion platform based on the 6UCU Stewart parallel mechanism, where the bottom platform simulates
    wave motion and the top platform is stabilized by controlling the length of six limbs to isolate the vibration of waves. Completed
    the forward, inverse kinematic solution, workspace analysis, and control of 6UCU Stewart parallel.<p>
<p>2.Proposed an improved linear active disturbance reject control (ILADRC) based on linear quadratic regulator (LQR) in joint space for each chain electric-driven actuator (PMSM) to achieve accurate stabilization of the top platform.</p>
<p>3.Utilized LQR to replace the series PD control in the traditional LADRC to solve the problem of controller bandwidth and its stability is verified using the Lyapunov theory. Used the LESO to estimate and compensate for the total disturbance of system. Verified the proposed controller ILADRC with the Lyapunov theory. Solved the problem of overshooting and oscillation of traditional PI control, and improved the anti-disturbance ability of the system.</p>
<p><strong>Achievement</strong> : <strong>Wenxuan Wang</strong>, Yang Zhang, Peng Xu*, Bing Li*. Linear active disturbance rejection control with linear quadratic regulator for Stewart platform in active wave compensation system. <strong>Applied Ocean Research,2025 (JCR Q1).</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0141118725000574">paper</a> </p>
<p> <strong>Wenxuan Wang</strong>, Xiaokai Cui, Peng Xu*, Bing Li*. An improved linear quadratic regulator of shipborne Stewart platform for wave compensation, <strong>IEEE International Conference on Robotics and Biomimetics, Bangkok, Thailand,2024 (EI).</strong> <a href="https://ieeexplore.ieee.org/abstract/document/10907563" target="blank">paper</a> </p>

<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <!-- Indicators (Optional) -->
    <ol class="carousel-indicators">
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="1"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="2"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="3"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="4"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="5"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="6"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="7"></li>
        <li data-bs-target="#researchProjectsCarousel2" data-bs-slide-to="8"></li>

    </ol>
    <!-- Carousel Inner -->
    <div class="carousel-inner">
        <!-- First Image -->
        <div class="carousel-item active">
            <img src="static/assets/img/Stewart.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        
        <!-- Fifth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- sixth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/Re-Figure3.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/Re-Figure2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project1-4.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project1-5.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/RE-Fig.16.b.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/RE-Fig.16.b.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/RE-Fig.16.c Y.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>
        <!-- Add more carousel items as needed for each image -->
    </div>

    <!-- Carousel Controls (Optional) -->
    <a class="carousel-control-prev" href="#researchProjectsCarousel2" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#researchProjectsCarousel2" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>
    
<!-- Add video below the carousel -->
<section id="video-section1" class="video-section" style="margin-top: 2px; margin-bottom: 2px;">
    <div class="container px-2">
        <header>
            <h3> 6-DOF Stabilized Platform control (vibration isolation, motion compensation)</h3>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/wave-comensation.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>
<!-- Add video below the carousel -->
<section id="video-section2" class="video-section" style="margin-top: 2px; margin-bottom: 2px;">
    <div class="container px-2">
        <header>
            <h3> Motion Simulation - Compensated platform simulation (real-time calculations) </h3>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/platform_simulation.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>
<!-- Add video below the carousel -->
<section id="video-section3" class="video-section" style="margin-top: 2px; margin-bottom: 2px;">
    <div class="container px-2">
        <header>
            <h3>Prototypes and experiments</h3>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/33.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>

            <div class="project-section">
<h3>Project 3: Hybrid variable stiffness collaborative robot for abrasive machining. (Postgraduate stage)</h3>
<p><strong>Members</strong>: Zhisen Li, <strong>Wenxuan Wang</strong>, Chenghao Huang, Kun Chen, Shen Xu,Bin Li*, Peng Xu*. --- Dec.2023 - Sept.2024</p>
<p><strong>Description:</strong> Designed a hybrid variable stiffness collaborative robot for grinding of complex curved components. The hybrid robot combines the high stiffness and high load capacity of parallel robots and the large workspace characteristics of tandem robots to perform a larger range of actions while maintaining structural stability.</p>
<p> 1.A variable stiffness joint based on a rope-pulley mechanism is proposed with the goal of high compactness and high torque density. The compact and modular design of the joint structure optimises the space utilisation of the robot.</p>
<p> 2.Proposed a novel two-rotation-one-translation 3-DOF redundant parallel end mechanism '2UPR-2RRU" , and a lightweight structural design of the parallel end mechanism is carried out. </p>
<p> 3.Developed An improved LADRC to compensate the position error caused by uncertain disturbance by introducing an exponential function to improve the performance of the actuator. A fuzzy logic loop is introduced into the adaptive term of the traditional adaptive impedance system, and a fuzzy adaptive conductance controller based on fuzzy inference rules is proposed to solve the force overshooting problem in the grinding force tracking process.</p> 
<p> <strong>Achievement</strong> : <a href="static/assets/Third.pdf" target="_blank">National Third Prize of the 6th Postgraduate Robot Innovation and Design Competition</a>.</p>
<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel4" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <!-- Indicators (Optional) -->
    <ol class="carousel-indicators">
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="1"></li>
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="2"></li>
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="3"></li>
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="4"></li>
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="5"></li>
        <li data-bs-target="#researchProjectsCarousel4" data-bs-slide-to="5"></li>
    
    </ol>
    <!-- Carousel Inner -->
    <div class="carousel-inner">
        <!-- First Image -->
        <div class="carousel-item active">
            <img src="static/assets/img/4-model (1).jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Fifth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/4.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- sixth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/4-model (2).jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/4-model (6).jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/3.1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/3.2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/3.3.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/3.4.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/3.5.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>
    
        <!-- Add more carousel items as needed for each image -->
    </div>

    <!-- Carousel Controls (Optional) -->
    <a class="carousel-control-prev" href="#researchProjectsCarousel4" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#researchProjectsCarousel4" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>

<!-- Add video below the carousel -->
<section id="video-section" class="video-section" style="margin-top: 5px;">
    <div class="container px-5">
        <header>
            <h2>Project 3 Video</h2>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/project4-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>

<div class="project-section">
<h3>Project 4: National Undergraduate Training Program for Innovation and Entrepreneurship: 'Core Traffic' -Designed of A New Type of Traffic Direction Robot (Project Number:202210731019--- Undergraduate period)</h3>
<p><strong>Members</strong>: <strong>Wenxuan Wang</strong>, Zixiang Nie, Zhenyu Chen, Huipeng He, Chaolei Pang, Shijun Hu*. --- Jan.2022 - Jan.2023</p> 
<p><strong>Description:</strong> To enhance operational efficiency and reduce safety incidents in traffic police work, we designed a mobile intelligent robot that integrates robotic technology with traffic management. This robot can operate continuously for 24 hours, addressing the safety risks traffic police face due to fatigue, particularly during night shifts. The robot's mechanical structure consists of three main components: the body, robotic arm, and chassis.</p>
<p>1.Designed an intelligent traffic-directing robot based on the STM32 chip, equipped with two 7-DOF humanoid robotic arms and four Mecanum wheels for mobility. This robot replaces humans in directing traffic and serves as a mobile electronic police unit.</p>
<p>2.Controlled robotic arm movement by adjusting the PWM duty cycle to manipulate the rotation angle of each servo, allowing the two 7-DOF arms to accurately replicate traffic police hand signals.</p>
<p>3.Incorporated image recognition technology using cameras mounted on the robotic arms. Combined with its mobility provided by the Mecanum wheels, the robot functions as a mobile electronic police officer, capable of capturing traffic violations and overcoming the limitations of stationary electronic police systems.</p>
<p> <strong>Achievement</strong> : <a href="static/assets/11.pdf" target="_blank">National First Prize</strong> of the 23rd China Robotics and Artificial Intelligence Competition.</a>

<a href="static/assets/22.pdf" target="_blank">National First Prize</strong>  of the International Youth Artificial Intelligence Innovation Competition.</a>.</p>

<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel1" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <!-- Indicators (Optional) -->
    <ol class="carousel-indicators">
        <li data-bs-target="#researchProjectsCarousel1" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#researchProjectsCarousel1" data-bs-slide-to="1"></li>
        <li data-bs-target="#researchProjectsCarousel1" data-bs-slide-to="2"></li>
        <li data-bs-target="#researchProjectsCarousel1" data-bs-slide-to="3"></li>
        <li data-bs-target="#researchProjectsCarousel1" data-bs-slide-to="4"></li>
    </ol>
    <!-- Carousel Inner -->
    <div class="carousel-inner">
        <!-- First Image -->
        <div class="carousel-item active">
            <img src="static/assets/img/Traffic-Robot.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Second Image -->
        <div class="carousel-item">
            <img src="static/assets/img/Mechanical-construction.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Control Strategy Simulation" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Third Image -->
        <div class="carousel-item">
            <img src="static/assets/img/Motion2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            </div>
        </div>

        <!-- Fourth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/Motion3.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Fifth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/5-DOF-Arm.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    
        <!-- Add more carousel items as needed for each image -->
    </div>

    <!-- Carousel Controls (Optional) -->
    <a class="carousel-control-prev" href="#researchProjectsCarousel1" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#researchProjectsCarousel1" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>
    

<!-- Add video below the carousel -->
<section id="video-section" class="video-section" style="margin-top: 5px;">
    <div class="container px-5">
        <header>
            <h2>Project 4 Video</h2>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/project1-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>


<div class="project-section">
<h3>Project 5: A Bionic Ant Robot for Rescue with Arduino chip  (Undergraduate period)</h3>
<p><strong>Members</strong>: <strong>Wenxuan Wang</strong>, Xinyue he, Chaolei Pang, Dongya Yang*. --- Oct.2021 - Jun.2022</p>
<p><strong>Description:</strong> Bio-inspired ant robots enhance rescue efficiency in confined or hazardous areas (e.g., earthquakes, collapses) through swarm intelligence and adaptability, reducing risks for human responders.  </p>
<p> 1.Responsible for the mechanical and hardware design, utilize the chip - Arduino to control Bionic Ant  motion</p>
<p> 2.Implemented the control of 6 legs with 20 servo motors, using USART communication and Bluetooth sensor interaction control.</p>
<p> 3.This is an open source project on the web, we have changed the outrigger motor improve robot robustness.</p>

<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
<!-- Indicators (Optional) -->
<ol class="carousel-indicators">
    <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="1"></li>
    <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="2"></li>
    
    
</ol>
<!-- Carousel Inner -->
<div class="carousel-inner">
    <!-- First Image -->
    <div class="carousel-item active">
        <img src="static/assets/img/4.24.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
        <div class="carousel-caption d-none d-md-block">
            
        </div>
    </div>

        <!-- second Image -->
        <div class="carousel-item">
        <img src="static/assets/img/4.25.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
        <div class="carousel-caption d-none d-md-block">
            
        </div>
    </div>
        <!-- third Image -->
        <div class="carousel-item">
        <img src="static/assets/img/4.26.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
        <div class="carousel-caption d-none d-md-block">
        </div>
    </div>
    <!-- Add more carousel items as needed for each image -->
</div>

<!-- Carousel Controls (Optional) -->
<a class="carousel-control-prev" href="#researchProjectsCarousel3" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</a>

<a class="carousel-control-next" href="#researchProjectsCarousel3" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</a>
</div>

<!-- Add video below the carousel -->
<section id="video-section" class="video-section" style="margin-top: 5px;">
<div class="container px-5">
    <header>
        <h2>Project 5 Video</h2>
    </header>
    <div class="main-body d-flex justify-content-center">
        <!-- Video Embed -->
        <video controls autoplay muted style="max-width: 800px; width: 100%;">
            <source src="static/assets/video/4.24.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</section>
</div>

<div class="project-section">
<h3>Project 6: National Undergraduate Training Program for Innovation and Entrepreneurship: Smart Home Security Robot (Project Number:202110731012---Undergraduate period)</h3>
<p><strong>Members</strong>: <strong>Wenxuan Wang</strong>, Chongzheng Zhang, Wenhui Cai, Huipeng He,Shuzhen Zhang*. --- Oct.2021 - Jun.2022</p>
<p><strong>Description:</strong> Empty nesters have become a growing concern in our country, with numerous accidents occurring each year due to the unexpected deaths of elderly individuals living alone. To address the safety issues faced by seniors living independently, we designed a smart home safety and security robot utilizing Arduino, ESP8266 WiFi, and the HC-05 Bluetooth module. This robot offers various features including home security threat detection, smoke alarms, voice recognition, visual tracking, human-machine interaction, and intelligent waste collection, enhancing overall home safety for elderly individuals.</p>
<p> 1.Responsible for the mechanical design, imulation modeling, and motion control of the robot, ensuring precise functionality and performance..</p>
<p> 2.Developed the control system for both the robot's chassis movement and the 5-DOF robotic arm's grasping actions using an Arduino chip.</p>
<p> 3.Implemented obstacle avoidance by integrating ultrasonic sensors with Arduino, using USART communication and adjusting the baud rate for seamless sensor interaction.</p>
<p> <strong>Achievement</strong> : <a href="static/assets/33.pdf" target="_blank">National Second Prize </strong>of the 3rd China University Intelligent Robot Creative Competition</a>


<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <!-- Indicators (Optional) -->
    <ol class="carousel-indicators">
        <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="1"></li>
        <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="2"></li>
        <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="3"></li>
        <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="4"></li>
        <li data-bs-target="#researchProjectsCarousel3" data-bs-slide-to="5"></li>
    
    </ol>
    <!-- Carousel Inner -->
    <div class="carousel-inner">
        <!-- First Image -->
        <div class="carousel-item active">
            <img src="static/assets/img/model-1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Fifth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/model-2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- sixth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/model-3.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/actual-1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/actual-2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/simulate-1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    
    
        <!-- Add more carousel items as needed for each image -->
    </div>

    <!-- Carousel Controls (Optional) -->
    <a class="carousel-control-prev" href="#researchProjectsCarousel3" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#researchProjectsCarousel3" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>

    <!-- Add video below the carousel -->
<section id="video-section" class="video-section" style="margin-top: 5px;">
    <div class="container px-5">
        <header>
            <h2>Project 6 Video</h2>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/project3-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>




<div class="project-section">
<h3>Project 7:National Undergraduate Training Program for Innovation and Entrepreneurship: Intelligent Delivery Robot Based on Embedded Management (Project Number:202110731014 ---Undergraduate period)</h3>
<p><strong>Members:</strong>Chaolei Pang<strong>, Wenxuan Wang</strong>, Mingfei Qing, Bowen Zhou, Xiangwan Ye, Dongya Yang*.--- Oct 2021 - June 2022</p>
<p><strong>Description:</strong> Researched and developed an intelligent courier delivery robot based on an embedded management system, capable of climbing stairs. By utilizing triangular track wheels, the robot overcomes the limitation of current delivery vehicles that cannot navigate stairs. Additionally, a database was integrated to manage back-end logistics information, combining hardware and software to achieve efficient delivery operations.</p>
<p>1. Integrated a triangular wheel and track structure to overcome the limitation of movement on flat surfaces, allowing the robot to climb stairs. A multi-degree-of-freedom robotic arm was added to the top of the vehicle for automatic door opening.</p>
<p>2. Implemented a QR code-based real-name system for secure parcel pickup. Once the microcontroller detects the corresponding QR code, it triggers the electromagnetic lock to open the delivery box while simultaneously storing the data in the backend database.</p>
<p>3. Led the mechanical design of the robot, including chassis motion control and the gripping actions of the robotic arm. </p>
<p> <strong>Achievement</strong> : <a href="static/assets/44.pdf" target="_blank">National First Prize of the 14th National 3D Digital Innovation Design Competition.</a>
<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel6" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <!-- Indicators (Optional) -->
    <ol class="carousel-indicators">
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="1"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="2"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="3"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="4"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="5"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="6"></li>
        <li data-bs-target="#researchProjectsCarousel6" data-bs-slide-to="7"></li>
    
    </ol>
    <!-- Carousel Inner -->
    <div class="carousel-inner">
        <!-- First Image -->
        <div class="carousel-item active">
            <img src="static/assets/img/project5-1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Fifth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- sixth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-3.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-4.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-7.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-5.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-8.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project5-9.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    
        <!-- Add more carousel items as needed for each image -->
    </div>

    <!-- Carousel Controls (Optional) -->
    <a class="carousel-control-prev" href="#researchProjectsCarousel6" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#researchProjectsCarousel6" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>

<!-- Add video below the carousel -->
<section id="video-section" class="video-section" style="margin-top: 5px;">
    <div class="container px-5">
        <header>
            <h2>Project 7 Video</h2>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/project5-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>

            <div class="project-section">
<h3>Project 8: A Multifunctional Robot for Mine Rehabilitation Grass Laying(Undergraduate period)</h3>
<p><strong>Members:</strong> <strong>Wenxuan Wang</strong>, Hongchang Zhao, Chaolei Pang, Huipeng He, Tianchi Wang, Yuan He*.--- June 2020 - June 2021</p>
<p><strong>Description:</strong> Developed an ecosystem restoration robot for mine rehabilitation and landslide management, capable of performing multiple functions including drilling, pouring, laying, and spraying grass seeds. This robot facilitates the process of mulching and vegetation restoration in degraded areas.</p>
<p>1. Led the design and machining of the overall mechanical structure, including model animation, chassis motion control, and robotic arm drilling functions.</p>
<p>2. Equipped the robot with a dual-track mobile chassis, enabling it to navigate the complex terrain of mining areas. Integrated a hydraulic telescopic arm to control the auger for drilling, a seeding mechanism for spraying grass seeds, and a belt conveyor system for laying grass squares.</p>
<p>3. Utilized an STM32C8T6 as the control core, incorporating GPS positioning, Mobileye, and an EyeQ3 camera. The robot's movement was driven by a geared motor, while serial communication managed the actions of drilling and grass seed spraying. </p>
<p> <strong>Achievement</strong> : <a href="static/assets/55.pdf" target="_blank">Provincial Second Prize The 10th National Student Mechanical Innovation Design Competition.</a>
<!-- Bootstrap Carousel for Image Auto-Play -->
<div id="researchProjectsCarousel5" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <!-- Indicators (Optional) -->
    <ol class="carousel-indicators">
        <li data-bs-target="#researchProjectsCarousel5" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#researchProjectsCarousel5" data-bs-slide-to="1"></li>
        <li data-bs-target="#researchProjectsCarousel5" data-bs-slide-to="2"></li>
        <li data-bs-target="#researchProjectsCarousel5" data-bs-slide-to="3"></li>
        <li data-bs-target="#researchProjectsCarousel5" data-bs-slide-to="4"></li>
        <li data-bs-target="#researchProjectsCarousel5" data-bs-slide-to="5"></li>
    
    </ol>
    <!-- Carousel Inner -->
    <div class="carousel-inner">
        <!-- First Image -->
        <div class="carousel-item active">
            <img src="static/assets/img/project6-1.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Redundant Drive Mechanism Model" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- Fifth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project6-2.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- sixth Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project6-3.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project6-4.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project6-5.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>

        <!-- seventh Image -->
        <div class="carousel-item">
            <img src="static/assets/img/project6-7.jpg" class="d-block mx-auto" class="d-block w-100 img-fluid" alt="Experimental Setup" style="max-width: 500px; height: auto;">
            <div class="carousel-caption d-none d-md-block">
            
            </div>
        </div>
    
    
        <!-- Add more carousel items as needed for each image -->
    </div>

    <!-- Carousel Controls (Optional) -->
    <a class="carousel-control-prev" href="#researchProjectsCarousel5" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#researchProjectsCarousel5" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>

<!-- Add video below the carousel -->
<section id="video-section" class="video-section" style="margin-top: 5px;">
    <div class="container px-5">
        <header>
            <h2>Project 8 Video</h2>
        </header>
        <div class="main-body d-flex justify-content-center">
            <!-- Video Embed -->
            <video controls autoplay muted style="max-width: 800px; width: 100%;">
                <source src="static/assets/video/project6-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>