/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

//    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
//    const menuToggle = document.body.querySelector('.menu-toggle');
//    menuToggle.addEventListener('click', event => {
//        event.preventDefault();
//        sidebarWrapper.classList.toggle('active');
//        _toggleMenuIcon();
//        menuToggle.classList.toggle('active');
//    })

    // Closes responsive menu when a scroll trigger link is clicked
//    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
//    scrollTriggerList.map(scrollTrigger => {
//        scrollTrigger.addEventListener('click', () => {
//            sidebarWrapper.classList.remove('active');
//            menuToggle.classList.remove('active');
//            _toggleMenuIcon();
//        })
//    });

//    function _toggleMenuIcon() {
//        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
//        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
//        if (menuToggleBars) {
//            menuToggleBars.classList.remove('fa-bars');
//            menuToggleBars.classList.add('fa-xmark');
//        }
//        if (menuToggleTimes) {
//            menuToggleTimes.classList.remove('fa-xmark');
//            menuToggleTimes.classList.add('fa-bars');
//        }
//    }


    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

window.addEventListener('DOMContentLoaded', event => {
    // ... 기존 코드 ...

    // D-Day 계산
    const weddingDate = new Date('2024-12-21T13:00:00'); // 결혼식 날짜 및 시간으로 변경
    const today = new Date();
    const timeDiff = weddingDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const ddayElement = document.getElementById('dday');
    if (ddayElement) {
        if (daysLeft > 0) {
            ddayElement.innerHTML = `OOO <i class="fas fa-heart text-danger"></i> OOO 결혼식이 <strong>${daysLeft}일</strong> 남았습니다.`;
        } else if (daysLeft === 0) {
            ddayElement.innerHTML = `오늘은 OOO <i class="fas fa-heart text-danger"></i> OOO 결혼식 날입니다!`;
        } else {
            ddayElement.innerHTML = `OOO <i class="fas fa-heart text-danger"></i> OOO 결혼식이 ${Math.abs(daysLeft)}일 지났습니다.`;
        }
    }

    // ... 나머지 기존 코드 ...
});

window.addEventListener('DOMContentLoaded', event => {
    // ... 기존 코드 ...

    // Naver Map 초기화
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const mapOptions = {
            center: new naver.maps.LatLng(37.5012763, 127.039607), // 예식장 위도, 경도로 변경
            zoom: 17, // 확대 수준
            zoomControl: true, // 줌 컨트롤 표시
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT
            }
        };
        const map = new naver.maps.Map('map', mapOptions);

        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.5012763, 127.039607), // 예식장 위도, 경도로 변경
            map: map,
            // (선택) 마커 클릭 시 정보창 표시
//            title: "OOO웨딩홀"
        });

        // (선택) 정보창 내용 (마커 클릭 시)
//        const infoWindow = new naver.maps.InfoWindow({
//            content: '<div style="padding:10px;"><b>OOO웨딩홀</b><br>서울시 강남구 테헤란로 123</div>'
//        });
//
//        naver.maps.Event.addListener(marker, "click", function(e) {
//            if (infoWindow.getMap()) {
//                infoWindow.close();
//            } else {
//                infoWindow.open(map, marker);
//            }
//        });

    }
});

    window.addEventListener('DOMContentLoaded', event => {
        // ... 기존 코드 ...

        // KakaoTalk 공유 버튼
        const kakaoShareButton = document.getElementById('kakao-share-btn');
        if (kakaoShareButton) {
            kakaoShareButton.addEventListener('click', () => {
                Kakao.Share.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: 'OOO ♥ OOO 결혼합니다', // 공유될 제목
                        description: '서로에게 가장 귀한 선물이 될 두 사람, 함께 축복해주세요!', // 공유될 설명
                        imageUrl: 'YOUR_INVITATION_MAIN_IMAGE_URL', // 초대장 대표 이미지 URL (절대 경로 권장)
                        link: {
                            mobileWebUrl: window.location.href, // 모바일 웹 링크
                            webUrl: window.location.href,    // PC 웹 링크
                        },
                    },
                    buttons: [
                        {
                            title: '초대장 보기',
                            link: {
                                mobileWebUrl: window.location.href,
                                webUrl: window.location.href,
                            },
                        },
                    ],
                });
            });
        }

        // (선택) URL 복사 버튼
        const copyUrlButton = document.getElementById('copy-url-btn');
        if (copyUrlButton) {
            copyUrlButton.addEventListener('click', () => {
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('초대장 주소가 복사되었습니다!');
                }).catch(err => {
                    console.error('URL 복사 실패:', err);
                    alert('URL 복사에 실패했습니다. 다시 시도해주세요.');
                });
            });

        // ... 나머지 기존 코드 ...
    });



function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
