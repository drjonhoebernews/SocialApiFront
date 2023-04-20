import React, { useState } from 'react';
import { Col, Container, Row, Collapse } from 'reactstrap';
import classnames from "classnames";

const Faqs = () => {

    const [col1, setcol1] = useState(true);
    const [col2, setcol2] = useState(false);
    const [col3, setcol3] = useState(false);
    const [col4, setcol4] = useState(false);

    const [col9, setcol5] = useState(false);
    const [col10, setcol6] = useState(true);
    const [col11, setcol7] = useState(false);
    const [col12, setcol8] = useState(false);

    const t_col1 = () => {
        setcol1(!col1);
        setcol2(false);
        setcol3(false);
        setcol4(false);

    };

    const t_col2 = () => {
        setcol2(!col2);
        setcol1(false);
        setcol3(false);
        setcol4(false);

    };

    const t_col3 = () => {
        setcol3(!col3);
        setcol1(false);
        setcol2(false);
        setcol4(false);

    };

    const t_col4 = () => {
        setcol4(!col4);
        setcol1(false);
        setcol2(false);
        setcol3(false);
    };

    const t_col5 = () => {
        setcol5(!col9);
        setcol6(false);
        setcol7(false);
        setcol8(false);

    };

    const t_col6 = () => {
        setcol6(!col10);
        setcol7(false);
        setcol8(false);
        setcol5(false);

    };

    const t_col7 = () => {
        setcol7(!col11);
        setcol5(false);
        setcol6(false);
        setcol8(false);

    };

    const t_col8 = () => {
        setcol8(!col12);
        setcol5(false);
        setcol6(false);
        setcol7(false);
    };

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Medyaizi Anlık Veri Platformu</h3>
                                <p className="text-muted mb-4 ff-secondary">Veri İşleme
                                    Algoritmalar sizin için gelişmiş veri analizi yapabilir, fakat verileri kontrol etmek için bir analist her zaman daha iyidir. Tecrübeli ekibimizle tüm sonuçlarınızı işleyin.</p>

                                {/*<div className="">*/}
                                {/*    <button type="button" className="btn btn-primary btn-label rounded-pill me-1"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i> Email Us</button>*/}
                                {/*    <button type="button" className="btn btn-info btn-label rounded-pill"><i className="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"></i> Send Us Tweet</button>*/}
                                {/*</div>*/}
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-lg-5 g-4">
                        <Col lg={6}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-1">
                                    <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fw-semibold">Sorular ve Cevaplar</h5>
                                </div>
                            </div>
                            <div className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                                id="genques-accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingOne">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col1 }
                                            )}
                                            type="button"
                                            onClick={t_col1}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Veri İşleme Algoritmalar Nedir ?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col1} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Ekibimiz sizin için ton analizi yapabilir, verileri temizleyebilir, sonuçları kategorize edebilir ve etiketleyebilir, önemli olayları eş zamanlı raporlayabilir.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingTwo">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col2 }
                                            )}
                                            type="button"
                                            onClick={t_col2}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Özel Aksiyonlar Nedir ?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col2} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Önemli kullanıcıların Tweetleri, markanızla ilgili Trending Topic’ler, sonuç hacmindeki beklenmeyen artışlar… Sizi ilgilendiren her önemli olaydan haberdar olun!
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingThree">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col3 }
                                            )}
                                            type="button"
                                            onClick={t_col3}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Medyaizi Avantajları Nelerdir?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col3} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Analiz ekibimiz Medyaizi verileriyle kapsamlı çalışma deneyimine sahiptir. Size milyonlarca veri kaynağı içinden büyük resmi görmeniz için yardımcı olalım.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingFour">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col4 }
                                            )}
                                            type="button"
                                            onClick={t_col4}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Aramıza Katılmanız İçin Yerinizi Almanızın Nedeni ?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col4} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Şu ana kadar 1.000’in üzerinde markaya hizmet verdik. Markanızla ilgili iyi ya da kötü gelişmeleri ilk duyan siz olun! Aksiyon almaya ihtiyacınız olduğunda yanınızdayız.
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-1">
                                    <i className="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fw-semibold">Sorular &amp; cevaplar</h5>
                                </div>
                            </div>

                            <div className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                                id="privacy-accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingOne">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col9 }
                                            )}
                                            type="button"
                                            onClick={t_col5}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Periyodik Raporlar Ve Önemi ?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col9} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Aylık, haftalık, günlük hatta saatlik raporlar almanız mümkün. Kriziniz çıktığında, eş zamanlı olarak verilere ulaşmanıza ve anında aksiyon almanıza yardımcı oluyoruz.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingTwo">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col10 }
                                            )}
                                            type="button"
                                            onClick={t_col6}
                                            style={{ cursor: "pointer" }}
                                        >
                                            VERİ ANALİZİYLE SİZE YARDIMCI OLALIM ?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col10} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Eğer verilerinizi analiz edecek kaynağınız yoksa hemen size yardımcı olalım!
                                            Deneyimli analistlerimiz günlük verilerinizi eş zamanlı analiz edebilir; isterseniz 7/24 raporlama sağlayabilir.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingThree">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col11 }
                                            )}
                                            type="button"
                                            onClick={t_col7}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Sosyal Veri Analizine Başlayın.
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col11} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                           Medyaizi  ekibi ile verilerinizi analiz edin, mükemmel içgörüler alın ve zamandan tasarruf edin.
                                            Web ve sosyal medyada veri toplama, pazar araştırmaları, raporlar ve analizlerle ilgili bilgi almak için bize ulaşın.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingFour">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col12 }
                                            )}
                                            type="button"
                                            onClick={t_col8}
                                            style={{ cursor: "pointer" }}
                                        >
                                            VERİ BİLİMİ VERİ SANATIYLA BULUŞUYOR.
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col12} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Medyaizi sosyal medya takibi ve sosyal medya ölçümleme araçlarının gücünü de arkamıza alarak sektörel araştırma, marka algı analizi, içerik analizi, konuşulma analizi, demografik araştırma, fikir önderi analizi gibi onlarca farklı tipte özel dijital pazar araştırmasını sizlere sunuyoruz!
                                        </div>
                                    </Collapse>
                                </div>
                            </div>

                            {/* <!--end accordion--> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Faqs;