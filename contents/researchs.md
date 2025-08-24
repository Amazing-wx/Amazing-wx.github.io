## 研究项目

### Project 1: Robot Perception and 3D Reconstruction - Robotics Algorithm Engineer (Intern) Qiaojie ShuWu Company | *Jul 2025 - Sep 2025*

**描述:** 基于收集的RGB视频流，采用VGGT、DGGN-SLAM、Colmap和3D-GS等算法实现室内外场景的3D重建和高保真渲染。提取优化后的网格模型并导入Isaacsim构建适合机器人感知和导航任务的仿真环境。

1. 开发并集成3D重建算法（VGGT、DROID-SLAM、MegaSAM、Colmap、3DGS），使用RGB视频实现高精度场景重建。
2. 应用PGSR提取网格模型并在Isaac Sim中构建机器人感知任务的仿真数据集。
3. 独立进行多种算法的调试和测试，撰写全面的技术报告和复现文档，为团队后续研究提供可靠基础。

### Project 2: Design and Control of a Stabilization Platform Based on IMU and Visual Fusion (Postgraduate stage)

**项目背景:** 本工作获得了中国广东核电集团（CGN）200万元横向项目"海上六自由度稳定平台运动控制研究"的资助，并成功获得广东省30万元资助（批准号：2023A1515240062）。

**描述:** 海上作业容易受到波浪引起的船舶扰动影响。为了提高海上设备的精度，确保作业人员安全并增加海上作业窗口，设计了6-DOF Stewart并联平台来补偿波浪运动扰动。

1. 基于6UCU Stewart并联机构设计了双运动平台，其中底部平台模拟波浪运动，顶部平台通过控制六个支链长度来隔离波浪振动。完成了6UCU Stewart并联的正逆运动学求解、工作空间分析和控制。
2. 提出了一种基于线性二次调节器（LQR）的改进线性主动干扰抑制控制（ILADRC），用于每个链式电驱动执行器（PMSM）的关节空间，以实现顶部平台的精确稳定。
3. 利用LQR替代传统LADRC中的串联PD控制，解决了控制器带宽问题，并使用Lyapunov理论验证了其稳定性。使用LESO估计和补偿系统的总干扰。使用Lyapunov理论验证了所提出的控制器ILADRC。解决了传统PI控制的超调和振荡问题，提高了系统的抗干扰能力。

**成果:**
- **Wenxuan Wang**, Yang Zhang, Peng Xu*, Bing Li*. Linear active disturbance rejection control with linear quadratic regulator for Stewart platform in active wave compensation system. **Applied Ocean Research,2025 (JCR Q1).** [论文](https://www.sciencedirect.com/science/article/pii/S0141118725000574)
- **Wenxuan Wang**, Xiaokai Cui, Peng Xu*, Bing Li*. An improved linear quadratic regulator of shipborne Stewart platform for wave compensation, **IEEE International Conference on Robotics and Biomimetics, Bangkok, Thailand,2024 (EI).** [论文](https://ieeexplore.ieee.org/abstract/document/10907563)

### Project 3: Hybrid variable stiffness collaborative robot for abrasive machining. (Postgraduate stage)

**成员:** Zhisen Li, **Wenxuan Wang**, Chenghao Huang, Kun Chen, Shen Xu,Bin Li*, Peng Xu*. --- Dec.2023 - Sept.2024

**描述:** 设计了用于复杂曲面组件磨削的混合变刚度协作机器人。混合机器人结合了并联机器人的高刚度和高负载能力以及串联机器人的大工作空间特性，在保持结构稳定性的同时执行更大范围的动作。

1. 提出了一种基于绳轮机构的变刚度关节，目标是高紧凑性和高扭矩密度。关节结构的紧凑模块化设计优化了机器人的空间利用率。
2. 提出了一种新颖的二转一移3-DOF冗余并联末端机构"2UPR-2RRU"，并对并联末端机构进行了轻量化结构设计。
3. 开发了一种改进的LADRC，通过引入指数函数来补偿不确定干扰引起的位置误差，提高执行器性能。在传统自适应阻抗系统的自适应项中引入模糊逻辑环，提出了一种基于模糊推理规则的模糊自适应导纳控制器，解决了磨削力跟踪过程中的力超调问题。

**成果:** [第六届研究生机器人创新设计大赛全国三等奖](static/assets/Third.pdf)

### Project 4: National Undergraduate Training Program for Innovation and Entrepreneurship: 'Core Traffic' -Designed of A New Type of Traffic Direction Robot (Project Number:202210731019--- Undergraduate period)

**成员:** **Wenxuan Wang**, Zixiang Nie, Zhenyu Chen, Huipeng He, Chaolei Pang, Shijun Hu*. --- Jan.2022 - Jan.2023

**描述:** 为了提高交警工作效率并减少安全事故，我们设计了一款集机器人技术与交通管理于一体的移动智能机器人。该机器人可以24小时连续运行，解决交警因疲劳特别是夜班期间面临的安全风险。机器人的机械结构由三个主要部分组成：机身、机械臂和底盘。

1. 基于STM32芯片设计了智能交通指挥机器人，配备两个7-DOF仿人机械臂和四个麦克纳姆轮用于移动。该机器人替代人类指挥交通，并作为移动电子警察。
2. 通过调整PWM占空比控制机械臂运动，操纵每个舵机的旋转角度，使两个7-DOF机械臂能够准确复制交警手势信号。
3. 在机械臂上安装摄像头，采用图像识别技术。结合麦克纳姆轮提供的移动性，机器人作为移动电子警察，能够捕捉交通违规行为，克服固定电子警察系统的局限性。

**成果:** 
- [第23届中国机器人及人工智能大赛全国一等奖](static/assets/11.pdf)
- [国际青年人工智能创新大赛全国一等奖](static/assets/22.pdf)

### Project 5: A Bionic Ant Robot for Rescue with Arduino chip (Undergraduate period)

**成员:** **Wenxuan Wang**, Xinyue he, Chaolei Pang, Dongya Yang*. --- Oct.2021 - Jun.2022

**描述:** 仿生蚂蚁机器人通过群体智能和适应性提高在受限或危险区域（如地震、坍塌）的救援效率，降低人类救援人员的风险。

1. 负责机械和硬件设计，利用Arduino芯片控制仿生蚂蚁运动。
2. 实现了6条腿20个舵机的控制，使用USART通信和蓝牙传感器交互控制。
3. 这是网络上的开源项目，我们改变了支腿电机以提高机器人鲁棒性。

### Project 6: National Undergraduate Training Program for Innovation and Entrepreneurship: Smart Home Security Robot (Project Number:202110731012---Undergraduate period)

**成员:** **Wenxuan Wang**, Chongzheng Zhang, Wenhui Cai, Huipeng He,Shuzhen Zhang*. --- Oct.2021 - Jun.2022

**描述:** 空巢老人已成为我国日益关注的问题，每年都有许多因独居老人意外死亡而发生的事故。为了解决老年人独立生活面临的安全问题，我们利用Arduino、ESP8266 WiFi和HC-05蓝牙模块设计了智能家居安全机器人。该机器人提供各种功能，包括家庭安全威胁检测、烟雾报警、语音识别、视觉跟踪、人机交互和智能垃圾收集，提高老年人的整体家庭安全。

1. 负责机器人的机械设计、仿真建模和运动控制，确保精确的功能和性能。
2. 使用Arduino芯片开发了机器人底盘运动和5-DOF机械臂抓取动作的控制系统。
3. 通过将超声波传感器与Arduino集成实现避障，使用USART通信并调整波特率以实现无缝传感器交互。

**成果:** [第三届中国大学智能机器人创意大赛全国二等奖](static/assets/33.pdf)

### Project 7: National Undergraduate Training Program for Innovation and Entrepreneurship: Intelligent Delivery Robot Based on Embedded Management (Project Number:202110731014 ---Undergraduate period)

**成员:** Chaolei Pang**, Wenxuan Wang**, Mingfei Qing, Bowen Zhou, Xiangwan Ye, Dongya Yang*.--- Oct 2021 - June 2022

**描述:** 研究开发了基于嵌入式管理系统的智能快递配送机器人，能够爬楼梯。通过利用三角履带轮，机器人克服了当前配送车辆无法导航楼梯的限制。此外，还集成了数据库来管理后端物流信息，结合硬件和软件实现高效配送操作。

1. 集成三角轮和履带结构，克服平面移动的限制，使机器人能够爬楼梯。在车辆顶部添加多自由度机械臂用于自动开门。
2. 实现了基于二维码的实名制系统，用于安全的包裹取件。一旦微控制器检测到相应的二维码，就会触发电磁锁打开配送箱，同时将数据存储在后端数据库中。
3. 领导机器人的机械设计，包括底盘运动控制和机械臂抓取动作。

**成果:** [第14届全国3D数字创新设计大赛全国一等奖](static/assets/44.pdf)

### Project 8: A Multifunctional Robot for Mine Rehabilitation Grass Laying(Undergraduate period)

**成员:** **Wenxuan Wang**, Hongchang Zhao, Chaolei Pang, Huipeng He, Tianchi Wang, Yuan He*.--- June 2020 - June 2021

**描述:** 开发了用于矿山修复和滑坡管理的生态系统恢复机器人，能够执行多种功能，包括钻孔、浇筑、铺设和喷洒草籽。该机器人促进了退化地区的覆盖和植被恢复过程。

1. 领导整体机械结构的设计和加工，包括模型动画、底盘运动控制和机械臂钻孔功能。
2. 为机器人配备了双履带移动底盘，使其能够在矿区的复杂地形中导航。集成了液压伸缩臂来控制钻头钻孔、播种机构喷洒草籽和皮带输送系统铺设草皮。
3. 使用STM32C8T6作为控制核心，集成GPS定位、Mobileye和EyeQ3摄像头。机器人运动由齿轮电机驱动，而串行通信管理钻孔和草籽喷洒动作。

**成果:** [第10届全国大学生机械创新设计大赛省级二等奖](static/assets/55.pdf)

### Project 9: National Engineering Training Comprehensive Ability Competition for College Students - Intelligent Logistics Handling Track (Undergraduate period)

**成员:** **Wenxuan Wang**, Xiangseng Kong, Chaolei Pang, Huipeng He, Dongya Yang*.--- Dec 2020 - July 2021

**描述:** 设计了能够在给定场地内完成物料搬运任务的自主小车。通过扫描二维码识别物流序列，机器人自主确定要运输的适当材料并将其运送到指定区域。

1. 使用OpenMV进行物流中的颜色识别。识别的颜色被分类并通过串行命令传输到机械臂以执行抓取动作。
2. 在小车的四个方向布置激光测距仪以计算场地大小。这些传感器的反馈用于建立平面坐标系进行实时小车定位。
3. 负责设计搬运小车的机械结构，使用OpenMV实现颜色识别，并使用上位机控制机械臂的抓取动作。

**成果:** [全国大学生工程训练综合能力竞赛省级三等奖](static/assets/66.pdf)