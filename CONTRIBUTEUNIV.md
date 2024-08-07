# SUSC 공식 웹사이트

**더 이상 활동을 못할 것 같을 때 다른 분께 인수인계 또는 SUSC운영진께 전달해주세요!**  
**여러분의 홍보 활동을 통해 여러분의 학교 학우들께 기회를 줄 수도 있지만, 반대로 안내가 이루어지지 않는다면 기회를 잃게됩니다.**

## SUSC 학교 대표(엠베서더)로서 해야하는 것들
1. SUSC 활동에 대해서 학교에 안내합니다.(에브리타임, 동아리 홍보)
2. 학교 구성원들을 모집합니다.
3. SUSC 사이트에 아래의 방법을 따라 학교 정보를 업데이트합니다.
4. 자유롭게 교류해주세요!

## 빌드하는 법
1. clone 후 `npm install`을 실행합니다.
2. `npm run dev`를 실행합니다.

## SUSC 학교 등록 방법

1. SUSC의 운영진에게 학교 등록을 요청합니다.
2. 운영진이 학교 등록을 승인하면, 아래의 절차를 진행합니다.
3. 동아리가 없는 경우, `SUSC 영문학교축약명`을 사용합니다.

### 1. 학교 데이터를 입력합니다.

1. `public/images/univ/` 폴더에 `학교 약자` 폴더를 생성합니다.
2. `학교 약자` 폴더에 학교 대표사잔으로 사용될 `학교명.jpeg` 파일을 생성합니다.
3. `학교 약자` 폴더 안에 `org` 폴더를 생성하여 학교 구성원들의 사진을 업로드합니다.
4. `src/content/` 폴더에 `학교 이름.mdx` 파일을 생성합니다.
5. 아래의 형식에 맞춰 파일을 작성합니다.(SNS는 없을 경우 생략 가능)
* 학교는 등록되어있는경우 `<UnivOrgCard ~ />` 부분만 복제하여 내용을 작성합니다. 

```mdx
---
univName: '학교이름'
univImg: '/images/univ/학교약자/학교명.jpeg'
univDescription: '학교 설명'
leadName: '리드이름'
viceLeadName: ['부대표이름']
clubList: ['동아리 명']
---

import UnivInfo from '@components/univ/UnivInfo.astro'

<UnivInfo
	univName="학교 이름"
	clubList={['동아리 이름']}
/>

import UnivOrgCard from '@components/univ/UnivOrgCard.astro';


<section class="bg-white dark:bg-gray-900">
	<div class="container px-6 py-10 mx-auto">
		<h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Organizers</h1>

		<p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">학교명에서는 원활한 SUSC활동을 위해 아래의 구성원들이 고생해주고 있습니다.</p>
		<div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
			<UnivOrgCard 
				orgImg="/images/univ/khu/org/.jpeg"
				orgName="이름"
				role="동아리명 Lead / SUSC 학교 약자 Ambassador"
				github="깃헙주소"
				linkedIn="링크드인"
				instagram="인스타"
			/>
		</div>
	</div>
</section>
```