"use client";

import { useState } from "react";

const slides = [
  {
    label: "Reception",
    title: "接待与精品零售区",
    description: "到店登记、护理沟通和用品挑选集中完成，空间温和明亮，等待区也更放松。",
    image: "/assets/store-reception-carousel.png",
    alt: "中国高端宠物洗护店接待与精品零售区",
    ariaLabel: "接待与精品零售区",
    dotLabel: "查看接待零售区",
  },
  {
    label: "Bathing",
    title: "透明洗护护理区",
    description: "玻璃分区、独立浴缸和清晰工具收纳，让洗护过程可见、干净、有秩序。",
    image: "/assets/store-wash-carousel.png",
    alt: "中国高端宠物洗护店透明洗护护理区",
    ariaLabel: "透明洗护护理区",
    dotLabel: "查看透明洗护区",
  },
  {
    label: "Grooming",
    title: "吹护与美容造型区",
    description: "吹干、梳理、修剪使用独立工位，降低噪音压力，也方便护理师细致操作。",
    image: "/assets/store-grooming-carousel.png",
    alt: "中国高端宠物洗护店吹护与美容造型区",
    ariaLabel: "吹护与美容造型区",
    dotLabel: "查看吹护美容区",
  },
];

const services = [
  ["B", "基础香波浴", "低刺激清洁、深层冲洗、吸水巾包裹与恒温吹干，适合日常清洁。"],
  ["C", "美容修剪", "脸部、脚底、腹底与整体造型修剪，按体型和毛量定制线条。"],
  ["E", "耳眼口护理", "耳道清洁、泪痕清理、口腔喷护与指甲修磨，减少日常护理死角。"],
  ["S", "皮毛舒缓", "针对干燥、毛躁、换毛期和敏感皮肤，搭配护毛素与舒缓护理。"],
];

const plans = [
  {
    name: "轻盈洗护",
    price: "¥88 起",
    featured: false,
    items: ["基础洗澡与吹干", "脚底毛清理", "指甲修磨", "香氛护理"],
  },
  {
    name: "全套精护",
    price: "¥168 起",
    featured: true,
    items: ["深层清洁洗护", "耳眼清洁", "脚垫护理", "基础造型修剪"],
  },
  {
    name: "美容造型",
    price: "¥268 起",
    featured: false,
    items: ["体型比例修剪", "脸部精修", "护毛柔顺护理", "护理报告"],
  },
];

const reviews = [
  {
    quote: "“家里小狗以前很怕吹风，这里会先让它适应声音，整个过程比预想安静很多。”",
    owner: "小柚主人 · 基础洗护",
    rating: 5,
  },
  {
    quote: "“修剪前会确认想保留的长度，洗完还会讲耳朵和皮肤情况，细节很到位。”",
    owner: "奶茶主人 · 美容造型",
    rating: 5,
  },
  {
    quote: "“猫咪胆子小，护理师没有急着洗，会先陪它熟悉环境，接回家后状态也很放松。”",
    owner: "团子主人 · 猫咪精护",
    rating: 5,
  },
  {
    quote: "“预约时间很准，到店不用长等。洗护记录写得清楚，哪里打结、哪里敏感都会标出来。”",
    owner: "可乐主人 · 全套精护",
    rating: 5,
  },
  {
    quote: "“以前洗完总觉得香味太重，这里的味道很轻，毛吹得蓬松但不干燥。”",
    owner: "布丁主人 · 皮毛舒缓",
    rating: 5,
  },
  {
    quote: "“美容造型没有一刀切，会按照狗狗脸型调整，拍照特别上镜，家里人都说像换了个精神头。”",
    owner: "豆包主人 · 美容造型",
    rating: 5,
  },
  {
    quote: "“能看到洗护区域很安心，护理师也会及时发照片，第一次把狗狗单独留下也没有焦虑。”",
    owner: "丸子主人 · 透明洗护",
    rating: 5,
  },
  {
    quote: "“老年犬腿脚不太好，店里会调整站立时间，还帮忙提醒了脚垫和指甲护理。”",
    owner: "Lucky 主人 · 老年犬护理",
    rating: 5,
  },
];

const reviewTrack = [...reviews, ...reviews];

function PawLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img">
      <path d="M20.4 27.1c4 0 7.2-4.4 7.2-9.8s-3.2-9.8-7.2-9.8-7.2 4.4-7.2 9.8 3.2 9.8 7.2 9.8Zm23.2 0c4 0 7.2-4.4 7.2-9.8s-3.2-9.8-7.2-9.8-7.2 4.4-7.2 9.8 3.2 9.8 7.2 9.8ZM12.8 40.4c3.5 0 6.3-3.5 6.3-7.8s-2.8-7.8-6.3-7.8-6.3 3.5-6.3 7.8 2.8 7.8 6.3 7.8Zm38.4 0c3.5 0 6.3-3.5 6.3-7.8s-2.8-7.8-6.3-7.8-6.3 3.5-6.3 7.8 2.8 7.8 6.3 7.8ZM32 30.2c-8.5 0-17.1 9.4-17.1 17.1 0 5.7 4.8 9.2 10.3 7.5 4.6-1.4 9-1.4 13.6 0 5.5 1.7 10.3-1.8 10.3-7.5 0-7.7-8.6-17.1-17.1-17.1Z" />
    </svg>
  );
}

function MapPin() {
  return (
    <svg className="cartoon-map-pin" viewBox="0 0 160 190" aria-hidden="true">
      <path d="M80 188C65 157 22 122 22 72 22 32 48 8 80 8s58 24 58 64c0 50-43 85-58 116Z" fill="#f28b75" stroke="#22313f" strokeWidth="8" strokeLinejoin="round" />
      <circle cx="80" cy="72" r="42" fill="#fffaf0" stroke="#22313f" strokeWidth="7" />
      <path d="M58 79c7-15 16-25 22-25s15 10 22 25c5 11-3 20-14 16a25 25 0 0 0-16 0c-11 4-19-5-14-16Z" fill="#357f75" />
      <circle cx="55" cy="61" r="10" fill="#22313f" />
      <circle cx="75" cy="49" r="11" fill="#22313f" />
      <circle cx="105" cy="61" r="10" fill="#22313f" />
      <circle cx="88" cy="48" r="9" fill="#22313f" />
      <path d="M49 111h62" stroke="#22313f" strokeWidth="6" strokeLinecap="round" />
      <path d="M60 111V94h40v17" fill="none" stroke="#22313f" strokeWidth="6" strokeLinejoin="round" />
      <path d="M54 94l26-20 26 20" fill="none" stroke="#22313f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} 星好评`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span className={index < rating ? "star filled" : "star"} aria-hidden="true" key={index}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <>
      <header className="topbar">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#">
            <span className="brand-mark" aria-hidden="true">
              <PawLogo />
            </span>
            <span>
              <strong>泡泡爪印</strong>
              <span>宠物洗护与护理</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#pricing">套餐</a>
            <a href="#reviews">口碑</a>
            <a href="#map">地图</a>
          </div>
          <a className="nav-action" href="#booking">立即预约</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div>
              <span className="eyebrow">透明护理间 · 一宠一浴巾 · 温和洗护</span>
              <h1>泡泡爪印宠物洗护店</h1>
              <p>为猫狗提供洗澡、吹护、修剪、耳眼清洁与皮毛护理。安静分区、可视化流程，让每一次洗护都更放松、更干净、更安心。</p>
              <div className="hero-actions">
                <a className="primary-btn" href="#booking">预约今日档期</a>
                <a className="secondary-btn" href="#services">查看服务项目</a>
              </div>
            </div>
            <aside className="quick-panel" aria-label="今日预约信息">
              <div className="quick-panel-head">
                <h2>今日可预约</h2>
                <span>10:00 - 21:00</span>
              </div>
              <form className="quick-booking-form" action="#booking">
                <label>
                  <span>用户昵称</span>
                  <input type="text" name="nickname" placeholder="如：小柚主人" autoComplete="name" required />
                </label>
                <label>
                  <span>电话号码</span>
                  <input type="tel" name="phone" placeholder="请输入手机号" autoComplete="tel" inputMode="tel" required />
                </label>
                <div className="form-row">
                  <label>
                    <span>宠物类型</span>
                    <select name="petType" defaultValue="" required>
                      <option value="" disabled>请选择</option>
                      <option value="large-dog">大型犬</option>
                      <option value="medium-dog">中型犬</option>
                      <option value="small-dog">小型犬</option>
                      <option value="cat">猫咪</option>
                      <option value="jiji-jiao">鸡鸡叫</option>
                      <option value="other">其他</option>
                    </select>
                  </label>
                  <label>
                    <span>服务项目</span>
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>请选择</option>
                      <option value="basic">基础洗护</option>
                      <option value="grooming">美容造型</option>
                      <option value="care">耳眼口护理</option>
                      <option value="skin">皮毛舒缓</option>
                    </select>
                  </label>
                </div>
                <button className="primary-btn quick-submit" type="submit">提交预约信息</button>
              </form>
            </aside>
          </div>
        </section>

        <div className="stats" aria-label="门店数据">
          <div className="stat"><strong>8 年</strong><span>资深洗护经验</span></div>
          <div className="stat"><strong>1 对 1</strong><span>独立护理工位</span></div>
          <div className="stat"><strong>96%</strong><span>回头客满意反馈</span></div>
        </div>

        <section className="space-showcase" aria-labelledby="spaceTitle">
          <div className="section-inner">
            <div className="section-head">
              <h2 id="spaceTitle">店内空间一眼看清</h2>
              <p>接待、洗护、吹护美容分区独立，动线清楚，减少宠物等待和交叉干扰。</p>
            </div>
            <div className="space-carousel">
              <div className="carousel-dots" aria-label="切换店内环境图片">
                {slides.map((slide, index) => (
                  <button
                    className={`carousel-dot${index === activeSlide ? " active" : ""}`}
                    type="button"
                    aria-label={slide.dotLabel}
                    aria-pressed={index === activeSlide}
                    key={slide.title}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>
              <div className="space-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {slides.map((slide) => (
                  <article className="space-slide" aria-label={slide.ariaLabel} key={slide.title}>
                    <img src={slide.image} alt={slide.alt} />
                    <div className="space-caption">
                      <span>{slide.label}</span>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn" type="button" aria-label="上一张店内环境图" onClick={() => showSlide(activeSlide - 1)}>‹</button>
                <button className="carousel-btn" type="button" aria-label="下一张店内环境图" onClick={() => showSlide(activeSlide + 1)}>›</button>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-inner">
            <div className="section-head">
              <h2>把洗护做细，也把情绪照顾好</h2>
              <p>从进店检查到吹干梳理，每一步都记录皮肤、毛结、耳道与脚垫状态，护理建议会同步给到主人。</p>
            </div>
            <div className="services">
              {services.map(([icon, title, description]) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="feature-band">
          <div className="section-inner feature-grid">
            <div className="feature-photo">
              <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&w=1100&q=82" alt="宠物洗护护理场景" />
            </div>
            <div>
              <div className="section-head"><h2>清楚的流程，稳定的节奏</h2></div>
              <div className="steps">
                <article className="step"><div className="step-num">01</div><div><h3>进店评估</h3><p>确认体重、毛结、皮肤状态与洗护禁忌，先沟通再开始。</p></div></article>
                <article className="step"><div className="step-num">02</div><div><h3>分区洗护</h3><p>猫狗分区护理，使用一次性耳棉与独立浴巾，工具按流程消毒。</p></div></article>
                <article className="step"><div className="step-num">03</div><div><h3>交付建议</h3><p>完成后说明掉毛、皮肤、耳眼与脚垫情况，给出居家护理建议。</p></div></article>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="section-inner">
            <div className="section-head">
              <h2>常用套餐</h2>
              <p>价格会根据体型、毛量、打结程度和配合情况调整，到店评估后再确认。</p>
            </div>
            <div className="pricing">
              {plans.map((plan) => {
                const isSelected = selectedPlan?.name === plan.name;

                return (
                  <article
                    className={`price-card${plan.featured ? " featured" : ""}${isSelected ? " selected" : ""}`}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSelected}
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedPlan(plan);
                      }
                    }}
                  >
                    {plan.featured && <span className="tag">人气选择</span>}
                    <h3>{plan.name}</h3>
                    <div className="price">{plan.price.replace(" 起", "")} <small>起</small></div>
                    <ul>
                      {plan.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <span className="select-plan">{isSelected ? "已选择此套餐" : "选择此套餐"}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="reviews" className="feature-band">
          <div className="section-inner">
            <div className="section-head">
              <h2>主人们常说，干净之外还有放心</h2>
              <p>我们把可见、可沟通、可追踪放进每一次服务里。</p>
            </div>
            <div className="reviews" aria-label="客户评价轮播">
              <div className="reviews-track">
                {reviewTrack.map((review, index) => (
                  <article className="review-card" key={`${review.owner}-${index}`} aria-hidden={index >= reviews.length}>
                    <StarRating rating={review.rating} />
                    <p>{review.quote}</p>
                    <div className="reviewer"><div className="avatar" /><span>{review.owner}</span></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="cta">
          <div className="section-inner">
            <div className="cta-panel">
              <div>
                <h2>想把下一次洗护安排得轻松一点？</h2>
                <p>电话预约可提前说明品种、体重、毛量和护理需求，门店会帮你预留合适时段。门店地址：京顺东街六号院2号楼。</p>
              </div>
              <div className="booking-box">
                <span>已选套餐</span>
                <strong id="selectedPlanText">{selectedPlan ? `${selectedPlan.name} ${selectedPlan.price}` : "请选择套餐"}</strong>
                <span>预约电话</span>
                <strong>021-8888 6677</strong>
                <span>微信同号 · 支持到店评估</span>
                <a className="primary-btn" href="tel:02188886677">拨打电话</a>
                <a className="secondary-btn map-btn" href="#map">查看下方地图</a>
              </div>
            </div>
          </div>
        </section>

        <section id="map" className="map-section">
          <div className="section-inner">
            <div className="section-head">
              <h2>门店地图</h2>
              <p>地址位于北京市朝阳区京顺东街六号院2号楼，地图中心使用卡通爪印标志标出门店位置。</p>
            </div>
            <div className="map-shell">
              <div className="map-toolbar">
                <div>
                  <strong>泡泡爪印宠物洗护店</strong>
                  <span>北京市朝阳区京顺东街六号院2号楼</span>
                </div>
                <a href="https://www.openstreetmap.org/?mlat=40.02271&mlon=116.52309#map=17/40.02271/116.52309" target="_blank" rel="noopener noreferrer">打开大地图</a>
              </div>
              <div className="map-frame" aria-label="泡泡爪印宠物洗护店地图">
                <iframe
                  title="泡泡爪印宠物洗护店位置地图"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=116.51859%2C40.02081%2C116.52759%2C40.02461&layer=mapnik&marker=40.02271%2C116.52309"
                />
                <div className="map-overlay-note" aria-hidden="true">
                  <MapPin />
                  <span>门店位置</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>泡泡爪印宠物洗护店 · 京顺东街六号院2号楼</span>
          <span>营业时间 10:00 - 21:00 · 周末建议提前一天预约</span>
        </div>
      </footer>
    </>
  );
}
