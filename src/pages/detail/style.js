import styled from "styled-components";
import theme from "../../global/theme";

const S = {}
const PALETTE = theme.PALETTE;
/* 디테일 컨테이너 디자인 */
S.DetailContainer = styled.div`
    width: 100%;
`
/* 디테일 래퍼 디자인 */
S.DetailWrapper = styled.div`
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    padding: 70px 0;
    /* 타이틀박스 디자인 */
    & .contentTitleBox{
        text-align: center;
        margin-bottom: 50px;
        & h1{
            font-size: 32px;
            font-weight: bold;
        }
    }
    /* 이미지 슬라이드 디자인 */
    & .contentSlide{
        padding: 40px 0;
        margin-bottom: 76px;
        /* 페이지네이션 불릿 */
        & .swiper-pagination-bullet{
            margin: 0 3px;
        }
        /* 페이지네이션 액티브 불릿 */
        & .swiper-pagination-bullet-active{
            background-color: ${PALETTE.yellow};
        }
    }
    /* 슬라이드 디자인 */
    & .swiper-slide{
        border-radius: 20px;
        user-select: none;
        height: 240px;
        /* 이미지 */
        & img{
            width: 100%;
            height: inherit;
            object-fit: cover;
            border-radius: 20px;
        }
    }
`
/* 디테일 상세박스 디자인 */
S.DetailContentBox = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 40px;
    border-bottom: 1px solid ${PALETTE.gray[200]};
`
S.LeftBox = styled.div`
    width: calc(100% - 430px);
    & h6{
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    & .titleBox{
        margin-bottom: 30px;
        & ul{
            
        }
    }
    & .dIcon{
        margin-bottom: 15px;
        position: relative;
        font-size: 14px;
        color: ${PALETTE.gray[300]};
        padding-left: 22px;
        line-height: 22px;
        &::before{
            margin-right: 7px;
            display: inline-block;
            position: absolute;
            top: 2px;
            left: 0;
            width: 15px;
            height: 15px;
            vertical-align: bottom;
        }
        &.user::before{
            content: url("./images/pages/detail/user.svg");
        }
        &.room::before{
            content: url("./images/pages/detail/house.svg");
        }
        &.bed::before{
            content: url("./images/pages/detail/bed-single.svg");
        }
        &.bath::before{
            content: url("./images/pages/detail/bath.svg");
        }
        &.picture::before{
            content: url("./images/pages/detail/image.svg");
        }
        &.wifi::before{
            content: url("./images/pages/detail/wifi-full.svg");
        }
        &.tv::before{
            content: url("./images/pages/detail/tv.svg");
        }
        &.car::before{
            content: url("./images/pages/detail/car.svg");
        }
        &.pool::before{
            content: url("./images/pages/detail/pool.svg");
        }
        &.time::before{
            content: url("./images/pages/detail/clock.svg");
        }
        &.check::before{
            content: url("./images/pages/detail/credit-card.svg");
        }
        &.users::before{
            content: url("./images/pages/detail/users.svg");
        }
        &.pet::before{
            content: url("./images/pages/detail/paw.svg");
        }
        &.moon::before{
            content: url("./images/pages/detail/moon.svg");
        }
        &.photo::before{
            content: url("./images/pages/detail/camera.svg");
        }
        &.memo::before{
            content: url("./images/pages/detail/text-document.svg");
        }
        &.trash::before{
            content: url("./images/pages/detail/bin.svg");
        }
        &.lock::before{
            content: url("./images/pages/detail/bag.svg");
        }
        &.off::before{
            content: url("./images/pages/detail/power.svg");
        }
        &.note::before{
            content: url("./images/pages/detail/note.svg");
        }
        &.caution::before{
            content: url("./images/pages/detail/Combined Shape.svg");
        }
        &.eye::before{
            content: url("./images/pages/detail/eye.svg");
        }
        &.bell::before{
            content: url("./images/pages/detail/bell.svg");
        }
    }
    & .hostBox{
        width: 100%;
        border: 1px solid ${PALETTE.gray[300]};
        border-radius: 20px;
        padding: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        &>div{
            display: flex;
            & .hostImg{
                border-radius: 50%;
                width: 60px;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                margin-right: 12px;
                & img{
                    object-fit: cover;
                    width: 100px;
                    height: inherit;
                }
            }
            & .hostName{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                & h6{
                    font-size: 20px;
                    font-weight: bold;
                    margin: 0;
                }
            }
            & .avrStarBox{
                border-right: 1px solid ${PALETTE.gray[300]};
                padding: 8px 20px 8px 0;
                display: flex;
                flex-direction: column;
                height: 60px;
                justify-content: space-between;
                align-items: center;
                & div{
                    &:first-child{
                        font-size: 24px;
                        font-weight: bold;
                    }
                    &:last-child{}
                }
            }
            & .reviewBox{
                padding: 8px 0 8px 20px;
                display: flex;
                flex-direction: column;
                height: 60px;
                justify-content: space-between;
                align-items: center;
                min-width: 74px;
                cursor: pointer;
                & div{
                    &:first-child{
                        font-size: 24px;
                        color: ${PALETTE.black};
                        font-weight: bold;
                    }
                    &:last-child{
                        & span{
                            font-size: 14px;
                            color: ${PALETTE.gray[300]};
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
    & .descriptionBox{
        margin-bottom: 30px;
        & p{
            font-size: 14px;
            color: ${PALETTE.black};
            line-height: 22px;
            white-space: pre-wrap;
            max-height: 200px;
            overflow-y: hidden;
            transition: all 0.3s;
            &.active{
                max-height: fit-content;
                padding-bottom: 20px;
            }
        }
        & button{
            width: 100%;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: -41px;
                left: 0;
                width: 100%;
                height: 40px;
                background: linear-gradient(0deg, #fff, transparent);
            }
        }
    }
    & .convenienceBox{
        & ul{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            & li{
                width: 50%;
            }
        }
    }
    & .noticeBox{
        max-height: 200px;
        overflow: hidden;
        &.active{
            max-height: fit-content;
            padding-bottom: 20px;
        }
        & h6{
            margin-bottom: 23px;
        }
        & p{
            font-size: 14px;
            margin-bottom: 8px;
        }
        & p.desc{
            font-size: 12px;
            color: ${PALETTE.gray[300]};
        }
        & p.listTitle{
            font-size: 12px;
            color: ${PALETTE.yellow};
            margin-top: 28px;
        }
        & li{
            margin-bottom: 4px;
            white-space: pre-line;
            color: ${PALETTE.black};
            font-size: 12px;
        }
        &~button{
            width: 100%;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: -41px;
                left: 0;
                width: 100%;
                height: 40px;
                background: linear-gradient(0deg, #fff, transparent);
            }
        }
    }
`
S.StarBack = styled.span`
    display: inline-block;
    aspect-ratio: 5 / 1;
    width: 63px;
    position: relative;
    clip-path: polygon(0 34%, 7% 34%, 10% 0, 13% 34%, 27% 34%, 30% 0, 33% 34%, 47% 34%, 50% 0, 53% 34%, 67% 34%, 70% 0, 73% 34%, 87% 34%, 90% 0, 93% 34%, 100% 34%, 95% 63%, 97% 100%, 90% 78%, 83% 100%, 85% 63%, 80% 34%, 75% 63%, 77% 100%, 70% 78%, 63% 100%, 65% 63%, 60% 34%, 55% 63%, 57% 100%, 50% 78%, 43% 100%, 45% 63%, 40% 34%, 35% 63%, 37% 100%, 30% 78%, 23% 100%, 25% 63%, 20% 34%, 15% 63%, 17% 100%, 10% 78%, 3% 100%, 5% 63%);
    background-color: ${PALETTE.gray[200]};
    & span{
        display: block;
        background-color: ${PALETTE.yellow};
        width: 0%;
        height: 100%;
    }
`
S.RightBox = styled.div`
    width: 430px;
    display: flex;
    justify-content: flex-end;
    & .rightBox{
        position: -webkit-sticky;
        position: sticky;
        top: 125px;
        width: 344px;
        height: fit-content;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        & .dayPriceBox{
            margin-bottom: 26px;
            & h6{
                color: ${PALETTE.yellow};
                font-size: 20px;
                font-weight: bold;
                & span:first-child{
                    letter-spacing: 1px;
                }
                & span:last-child{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${PALETTE.black};
                }
            }
        }
        & .checkInOutBox{
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            border: 1px solid ${PALETTE.gray[200]};
            overflow: hidden;
            margin-bottom: 26px;
            &>div{
                display: flex;
                & button{
                    border: none;
                    background-color: white;
                    height: 48px;
                    cursor: pointer;
                    display: block;
                    text-align: left;
                    padding: 0 14px;
                    font-size: 12px;
                    font-weight: bold;
                    color: ${PALETTE.black};
                    & span:nth-of-type(2){
                        font-weight: 400;
                    }
                }
                &:first-child{
                    & button{
                        width: 50%;
                        border-bottom: 1px solid ${PALETTE.gray[200]};
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        &:first-child{
                            border-right: 1px solid ${PALETTE.gray[200]};
                        }
                    }
                }
                &:last-child{
                    & button{
                        width: 100%;
                        position: relative;
                        &::after{
                            content: url('./images/pages/detail/arrow.png');
                            width: 14px;
                            height: 12px;
                            display: inline-block;
                            position: absolute;
                            top: 50%;
                            right: 14px;
                            transform: translateY(-50%);
                        }
                        & span:first-of-type{
                            margin-right: 14px;
                        }
                    }
                }
            }
        }
        & .payListBox{
            & ul{
                & li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    & span{
                        font-size: 12px;
                        color: ${PALETTE.black};
                        &:first-of-type{}
                        &:last-of-type{}
                    }
                    &.total{
                        font-weight: bold;
                        margin-bottom: 30px;
                        & span{
                            font-size: 14px;
                        }
                    }
                }
                & hr{
                    margin: 30px 0;
                    border: none;
                    border-bottom: 1px solid ${PALETTE.gray[200]};
                }
            }
        }
        & .reserveBtn{
            width: 100%;
        }
    }
`

S.DetailGradeBox = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid ${PALETTE.gray[200]};
    & ul{
        width: 100%;
        display: flex;
        align-items: center;
        & li{
            width: calc(100% / 6);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &::after{
                content: '';
                width: 1px;
                height: 108px;
                background-color: ${PALETTE.gray[200]};
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
            &:last-of-type::after{
                content: none;
            }
            &>div{
                height: 122px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                & p{
                    font-size: 14px;
                    color: ${PALETTE.black};
                }
                &>div{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 17px;
                    width: 100%;
                    & .gradeNum{
                        font-size: 12px;
                        color: ${PALETTE.black};
                    }
                    & .barContainer{
                        display: inline-block;
                        width: 130px;
                        height: 5px;
                        background-color: ${PALETTE.gray[200]};
                        position: relative;
                        & .bar{
                            display: inline-block;
                            height: 5px;
                            background-color: ${PALETTE.yellow};
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }
                }
                & h3{
                    font-size: 36px;
                    font-weight: bold;
                }
                & img{
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
`
S.DetailCommentBox = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid ${PALETTE.gray[200]};
    &>div{
        &:first-child{
            display: flex;
            flex-wrap: wrap;
            & .commentCard{
                width: 50%;
                padding-right: 45px;
                margin-bottom: 55px;
                & .commentTBox{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    &>div:first-child{
                        display: flex;
                        align-items: center;
                        & .commentImg{
                            width: 60px;
                            height: 60px;
                            display: flex;
                            align-items: center;
                            border-radius: 50%;
                            overflow: hidden;
                            margin-right: 25px;
                            & img{
                                width: 100%;
                            }
                        }
                        & .commentId{
                            font-size: 20px;
                        }
                    }
                    &>div:last-child{
                        & .starBox{
                            display: inline-block;
                            width: 65px;
                            aspect-ratio: 5 / 1;
                            position: relative;
                            clip-path: polygon(0 34%, 7% 34%, 10% 0, 13% 34%, 27% 34%, 30% 0, 33% 34%, 47% 34%, 50% 0, 53% 34%, 67% 34%, 70% 0, 73% 34%, 87% 34%, 90% 0, 93% 34%, 100% 34%, 95% 63%, 97% 100%, 90% 78%, 83% 100%, 85% 63%, 80% 34%, 75% 63%, 77% 100%, 70% 78%, 63% 100%, 65% 63%, 60% 34%, 55% 63%, 57% 100%, 50% 78%, 43% 100%, 45% 63%, 40% 34%, 35% 63%, 37% 100%, 30% 78%, 23% 100%, 25% 63%, 20% 34%, 15% 63%, 17% 100%, 10% 78%, 3% 100%, 5% 63%);
                            background-color: ${PALETTE.gray[200]};
                            & .star{
                                display: block;
                                background-color: ${PALETTE.yellow};
                                width: 0%;
                                height: 100%;
                            }
                        }
                    }
                }
                & .commentBBox{
                    & p{
                        font-size: 16px;
                        color: ${PALETTE.black};
                        overflow: hidden;
                        white-space: normal;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: keep-all;
                        line-height: 28px;
                    }
                }
            }
        }
        &:last-child{
            display: flex;
            justify-content: center;
        }
    }
`

S.DetailMapBox = styled.div`
    padding-top: 30px;
    & h6{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 28px;
        color: ${PALETTE.black};
    }
    & p{
        font-size: 16px;
        color: ${PALETTE.gray[300]};
        margin-bottom: 25px;
    }
    & #Map{
        width: 100%;
        height: 460px;
        border-radius: 20px;
        border: 1px solid #ddd;
    }
`
export default S;