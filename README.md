# healthcase_service_rn
HealthCareServiceSystem_React-Native_frontend

Setting 절차 

1. node LTS (12.16 기준) 다운로드
2. 안드로이드 기반 visual-studio 설치 (에뮬레이터 사용을 위한)
3. CLI : npm install react-native-cli
4. CLI : react-native init {ProjectName}
5. 생성된 프로젝트를 안드로이드 스튜디오에서 File->Open 으로 열되, 프로젝트내 android 를 연다.
6. 2020/10/05 기준 compileSdkVersion 29 API Level 을 요구하여 file->setting->systemSetting->SDK 내 29 level 추가 설치

Packages to install: 
- Android SDK Platform 29 (platforms;android-29)
- Sources for Android 29 (sources;android-29)

7. 환경변수 SDK 를 등록 

ANDROID_HOME
C:\Users\LG\AppData\Local\Android\Sdk

8. AVD Manager 들어가서 사용할 모바일 VM 세팅을 한다.
9. 세팅을 하다가 중간에 img Package 를 다운로드 하는데 29, 30 버전 둘다 받음.
