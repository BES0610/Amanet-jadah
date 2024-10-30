

let navber = document.getElementById("nav");
navber.innerHTML = `
    <div class="NavBar">
        <div class="contaner">
            <ul class="mr-8">
                <li>
                    <span id="logo" class="mr-8"><img class="logo" src="../../../assest/Media/Genral/Logo.jpg" alt="Logo" /></span>
                </li>
                <li style="width: 188px; text-align: center; line-height: 18px; font-weight: 700; font-size: 15px;">
                    <span class="mr-8">وكالة برنامج الامطارالإدارة العامة لصيانة شبكات المياةإدارة الحلول العاجلة</span>
                </li>
                <li id="Home">
                    <a href="../../../pages/Home/HomePage/index.html"><span class="mr-8">الرئيسية</span></a>
                </li>
                <li id="Owner">
                    <icon><img src="../../../assest/Media/Genral/arrow.jpg" alt="Arrow"  /></icon>
                    <span class="mr-8 tab-link" data-tab="OnwerTap">المالك</span>
                </li>
                <li id="consultative">
                    <icon><img src="../../../assest/Media/Genral/arrow.jpg" alt="Arrow"  /></icon>
                    <span class="mr-8 tab-link" data-tab="consultativeTap">الاستشاريين</span>
                </li>
                <li id="Contractors">
                    <icon><img src="../../../assest/Media/Genral/arrow.jpg" alt="Arrow" /></icon>
                    <span class="mr-8 tab-link" data-tab="ContractorsTap">المقاولين</span>
                </li>
                <li id="Honesty">
                    <icon><img src="../../../assest/Media/Genral/arrow.jpg" alt="Arrow"  /></icon>
                    <span class="mr-8 tab-link" data-tab="HonestyTap">الامانة</span>
                </li>
                <li>
                    <icon><img src="../../../assest/Media/Genral/arrow.jpg" alt="Arrow" /></icon>
                    <span class="mr-8 tab-link" style="font-family: HelveticaBold;" data-tab="login">تسجيل الدخول</span>
                </li>
            </ul>
    
            <div class="tab-content OnwerTap" id="OnwerTap">
                <div class="firstRow">
                    <h4>المالك</h4>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Owner/Group 1171275061 (1).jpg" alt="" />
                        <a href="../../../pages/Owner/ReqWaterService/index.html"><div>طلب خدمه ضخ المياه</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Owner/Group 1171275061.jpg" alt="" />
                        <a href="../../../pages/Owner/Transactioninquiry/index.html" >استعلام عن معامله</a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Owner/Group 1171275061 (2).jpg" alt="" />
                        <a>الاستعلام عن الامتار المستحقه</a>
                    </div>
                </div>
                
                <div class="ScoRow">
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Owner/polisher 1.jpg" alt="" />
                        <a href="../../../pages/Owner/projects/index.html">مشاريعي</a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Owner/sea 1.jpg" alt="" />
                        <a href="../../../pages/Owner/SaleOffers/index.html">عروض اسعار</a>
                    </div>
                </div>
                
                <div class="ThirdRow">
                    <h4>الخدمات الاكثر استخداما</h4>
                    <div class="link-container" style="height: 10px;">
                        <a href="../../../pages/Owner/login/index.html">انشاء حساب</a>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <a>الاستعلام عن معامله</a>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <a href="../../../pages/Owner/inquiryconsultative/index.html">الاستعلام عن استشاري</a>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <a href="../../../pages/Owner/inquiryContractors/index.html">الاستعلام عن مقاوي</a>
                    </div>
                </div>
            </div> 
            <div class="tab-content consultativeTap" id="consultativeTap">
                <div class="firstRow">
                    <h4>الاستشاريين</h4>
                    <div class="link-container">
                        <img style="margin-left: 16px;" src="../../../assest/Icons/HomePage/consultative/case 1.jpg" alt="" />
                        <a href="../../../pages/consultative/presentSaleOffer/index.html">تقديم عروض الاسعار</a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275059 (1).jpg" alt="" />
                        <a href="../../../pages/consultative/pumpingRequest/index.html"><div>تقديم طلبات تصاريح ضخ</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275059 (2).jpg" alt="" />
                        <a href="../../../pages/consultative/ContractorsOffer/index.html"><div>تقديم عروض مقاولين</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275059.jpg" alt="" />
                        <div>تعميد خط بديل</div>
                    </div>
                </div>
                
                <div class="ScoRow">
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275060.jpg" alt="" />
                        <a href="../../../pages/consultative/projects/index.html"><div>مشاريعي</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275061 (1).jpg" alt="" />
                        <a href="../../../pages/consultative/Transactioninquiry/index.html"><div>استعلام عن معامله</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275061 (1).jpg" alt="" />
                        <a href="../../../pages/consultative/ReqAdoption/index.html"><div>طلب اعتماد او تحديث</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/consultative/Group 1171275061.jpg" alt="" />
                        <div>الجولات الرقابيه</div>
                    </div>
                </div>
                
                <div class="ThirdRow">
                    <h4>الخدمات الاكثر استخداما</h4>
                    <div class="link-container" style="height: 10px;">
                        <div>الاستعلام عن ترخيض ضخ</div>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>الاستعلام عن المشاريع المنتهيه</div>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>الاستعلام عن المشاريع المنتهيه</div>
                    </div>
                </div>
            </div> 
            <div class="tab-content ContractorsTap" id="ContractorsTap">
                <div class="firstRow">
                    <h4>المقاولين</h4>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Contractors/Group 1171275059.jpg" alt="" />
                        <a href="../../../pages/Contractors/presentSaleOffer/index.html"><div>تقديم عروض الاسعار</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Contractors/Group 1171275060.jpg" alt="" />
                        <a href="../../../pages/Contractors/projects/index.html"><div>مشاريعي</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Contractors/Group 1171275061 (1).jpg" alt="" />
                        <div>تعميد خط بديل</div>
                    </div>
                </div>
                
                <div class="ScoRow">
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Contractors/Group 1171275061 (2).jpg" alt="" />
                        <div>طلب اعتماد او تحديث</div>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Contractors/Group 1171275061.jpg" alt="" />
                        <a href="../../../pages/Contractors/Transactioninquiry/index.html"><div>استعلام عن معامله</div></a>
                    </div>
                </div>
                
                <div class="ThirdRow">
                    <h4>الخدمات الاكثر استخداما</h4>
                    <div class="link-container" style="height: 10px;">
                        <div>استعلام عن معامله</div>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>الاستعلام عن ترخيض ضخ</div>

                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>الاستعلام عن المشاريع المنتهيه</div>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>طلب اعتماد او تحديث</div>
                    </div>
                </div>
            </div>
            <div class="tab-content HonestyTap" id="HonestyTap">
                <div class="firstRow">
                    <h4>الامانه</h4>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Honesty/Group 1171275059.jpg" alt="" />
                        <div>تصريح ضخ</div>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Honesty/Group 1171275060 (1).jpg" alt="" />
                        <div>اعتماد</div>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Honesty/Group 1171275060 (2).jpg" alt="" />
                        <div>اعدادات</div>
                    </div>
                </div>
                
                <div class="ScoRow">
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Honesty/Group 1171275060.jpg" alt="" />
                        <a href="../../../pages/Honesty/Transactioninquiry/index.html"><div>استعلام عن معامله</div></a>
                    </div>
                    <div class="link-container">
                        <img src="../../../assest/Icons/HomePage/Honesty/Group 1171275061 (1).jpg" alt="" />
                        <div>المشاريع</div>
                    </div>
                    <div class="link-container" id="smalltap" style="position: relative;" onclick="toggleDropdown()">
                        <img src="../../../assest/Icons/HomePage/Honesty/Group 1171275061.jpg" alt="" />
                        <div>الاستشاري</div>
                        <icon>
                            <img style="width: 7px; height: 7px; margin-right: -23px;" src="../../../assest/Media/Genral/arrow.jpg" alt="Arrow" />
                        </icon>
                        <!-- Hidden dropdown content -->
                        <div class="dropdown-content">
                            <a href="../../../pages/Honesty/ConsultTap1/index.html"><div>تعميد خط بديل</div></a>
                            <a href="../../../pages/Honesty/ConsultTap2/index.html"><div style="margin-top: 25px;color:var(--text-color) ">الجولات الرقابيه</div></a>
                        </div>
                    </div>
                </div>
                
                <div class="ThirdRow">
                    <h4>الخدمات الاكثر استخداما</h4>
                    <div class="link-container" style="height: 10px;">
                        <a href="../../../pages/Honesty/Transactioninquiry/index.html"><div>استعلام عن معامله</div></a>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>عن مالك</div>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>عن استشاري</div>
                    </div>
                    <div class="link-container" style="height: 10px;">
                        <div>عن مقاول</div>
                    </div>
                </div>
            </div>
            <div class="tab-content login" id="login"> <!-- Updated Login Tab Content -->
                <div class="login-item">
                    <img src="../../../assest/Icons/HomePage/log-in.jpg" alt="تسجيل الدخول" class="login-img" />
                    <h1>تسجيل الدخول</h1>
                </div>
                <div class="login-item">
                    <img src="../../../assest/Icons/HomePage/globe.jpg" alt="العربيه" class="login-img" />
                    <h1>العربيه</h1>
                </div>
            </div>
            
        </div>
    </div>
    
    `